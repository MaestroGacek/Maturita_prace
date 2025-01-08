import React, { useState } from 'react';

function ObjednavkaForm({ location }) {
    const { state } = location;
    const totalPrice = state ? state.price : 0;

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !address || !contact) {
            setError('All fields are required.');
            return;
        }
        console.log('Order submitted:', { name, address, contact, totalPrice });
        setName('');
        setAddress('');
        setContact('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Objednávka</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>Jméno:</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />
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
}

export default ObjednavkaForm;