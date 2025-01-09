import { supabase } from '../SupabaseClient'; 
import React, { useState } from 'react';
import '../styl/FormRegistrace.css';

const FormRegistrace = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { user, error } = await supabase.auth.signUp({
            email,
            password,
        });
        if (error) {
            setError(error.message);
        } else {
            window.alert('User registrován:', user);
           
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Registrace</h1>
            <h2>Email</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <h2>Heslo</h2>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Registrovat se</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default FormRegistrace;