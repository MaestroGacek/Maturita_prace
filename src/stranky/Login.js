import { supabase } from '../SupabaseClient';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../styl/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const history = useHistory();

    useEffect(() => {
        // Check for existing session
        const session = supabase.auth.getSession();
        setUser(session?.user || null);

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
        });

        return () => subscription?.unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            if (data.user) {
                setUser(data.user);
                history.push('/'); // Redirect to home page after login
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleLogout = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            setUser(null);
            history.push('/login');
        } catch (error) {
            setError(error.message);
        }
    };

    if (user) {
        return (
            <div className="login">
                <h2>Přihlášen jako: {user.email}</h2>
                <button onClick={handleLogout}>Odhlásit se</button>
            </div>
        );
    }

    return (
        <div className="login">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <h2>Email</h2>
                    <input
                        id  = "email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <h2>Heslo</h2>
                    <input
                        id  = "password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Přihlásit se</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Login;