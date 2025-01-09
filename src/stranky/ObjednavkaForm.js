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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !address || !contact || !email) {
            setError('All fields are required.');
            return;
        }

        // Initialize EmailJS with your public key
        emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

        const templateParams = {
            to_email: email,
            to_name: name,
            address: address,
            contact: contact,
            total_price: totalPrice,
        };

        emailjs.send(
            'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
            'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
            templateParams
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setSuccess('Objednávka byla úspěšně odeslána! Zkontrolujte svůj email.');
            setName('');
            setAddress('');
            setContact('');
            setEmail('');
            setError('');
        }, (err) => {
            console.log('FAILED...', err);
            setError('Došlo k chybě při odesílání objednávky. Zkuste to prosím znovu.');
        });
    };

    return (
        <form ref={form} onSubmit={handleSubmit}>
            <h2>Objednávka</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <div>
                <label>Jméno:</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
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
                <h3>Celkova cena: {totalPrice} Kč</h3>
            </div>
            <button type='submit'>Objednat</button>
        </form>
    );
};

export default ObjednavkaForm;