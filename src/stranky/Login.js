import { supabase } from '../SupabaseClient'; 
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { user, error } = await supabase.auth.signIn({
            email,
            password,
        });
        if (error) {
            setError(error.message);
        } else {
            console.log('User logged in:', user);
           
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Email</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <h2>Password</h2>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Login</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default Login;