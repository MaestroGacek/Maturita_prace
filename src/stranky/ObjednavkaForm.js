import { supabase } from '../SupabaseClient'; 
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styl/ObjednavkaForm.css';

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
        <div className="objednavka">
            <div className="objednavka-container">
                <h2>Objednávka</h2>
                <form ref={form} onSubmit={handleSubmit}>
                    <h2>Jméno</h2>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Vaše jméno"
                        required
                    />
                    <h2>Email</h2>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Váš email"
                        required
                    />
                    <h2>Adresa</h2>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Vaše adresa"
                        required
                    />
                    <h2>Telefon</h2>
                    <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Váš telefon"
                        required
                    />
                    <h2>Celková cena</h2>
                    <p>{totalPrice} Kč</p>
                    <button type="submit">Objednat</button>
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}
                </form>
            </div>
        </div>
    );
};

export default ObjednavkaForm;