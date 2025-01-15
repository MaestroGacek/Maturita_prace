import { supabase } from '../SupabaseClient'; 
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function ObjednavkaForm({ location }) {
    const { state } = location || {};
    const totalPrice = state ? state.price : 0;
    const form = useRef();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !address || !contact || !email) {
            setError('All fields are required.');
            return;
        }

        try {
            // Save order to Supabase
            const { data, error: supabaseError } = await supabase
                .from('orders')
                .insert([
                    {
                        name: name,
                        email: email,
                        address: address,
                        contact: contact,
                        total_price: totalPrice,
                        created_at: new Date().toISOString()
                    }
                ]);

            if (supabaseError) {
                throw supabaseError;
            }

            emailjs.init("KQssTKecLzDR9Jjn0");

            const templateParams = {
                to_email: email,
                to_name: name,
                address: address,
                contact: contact,
                total_price: totalPrice,
                from_name: "E-shop",
                message: `Nová objednávka:
Jméno: ${name}
Email: ${email}
Adresa: ${address}
Telefon: ${contact}
Celková cena: ${totalPrice} Kč`
            };

            emailjs.send(
                'service_rv3gsvd', 
                'template_hnd94ld',
                templateParams,
                'KQssTKecLzDR9Jjn0'
            ).then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setSuccess('Objednávka byla úspěšně odeslána! Zkontrolujte svůj email.');
                    setName('');
                    setAddress('');
                    setContact('');
                    setEmail('');
                    setError('');
                },
                (error) => {
                    console.error('FAILED...', error);
                    setError(`Došlo k chybě při odesílání objednávky: ${error.text}`);
                }
            );
        } catch (error) {
            console.error('FAILED...', error);
            setError(`Došlo k chybě při ukládání objednávky: ${error.message}`);
        }
    };

    return (
        <form ref={form} onSubmit={handleSubmit}>
            <h2>Objednávka</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <div>
                <label>Jméno:</label>
                <input type='text' id='text' value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Adresa:</label>
                <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div>
                <label>Telefon:</label>
                <input type='text' value={contact} onChange={(e) => setContact(e.target.value)} required />
            </div>
            <div>
                <h3 id='message' >Celkova cena: {totalPrice} Kč</h3>
            </div>
            <button type='submit'>Objednat</button>
        </form>
    );
};

export default ObjednavkaForm;