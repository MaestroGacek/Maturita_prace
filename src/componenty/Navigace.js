import React from 'react'
import Logo from "../obrazky/Logo.png"
import { Link, useHistory } from 'react-router-dom'
import "../styl/Navigace.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../SupabaseClient';

function Navigace() {
  const [otevriLink, setOtevritLink] = useState(false);
  const { user } = useAuth();
  const history = useHistory();

  const toggleNavbar = () => {
    setOtevritLink(!otevriLink);
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      history.push('/login');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div className='navigace'>
      <div className='vlevo' id={otevriLink ? "open" : "close"}>
        <div className="user-info">
          {user && (
            <>
              <span className="user-email">{user.email}</span>
              <button onClick={handleLogout}>Odhlásit se</button>
            </>
          )}
        </div>
        <img src={Logo} alt="Logo" />
        <div className='hiddenLinks'>
          <Link to={"/"}>Domovská stránka</Link>
          <Link to={"/menu"}>Produkty</Link>
          <Link to={"/about"}>O nás</Link>
          {!user && (
            <>
              <Link to={"/registrace"}>Registrace</Link>
              <Link to={"/login"}>Login</Link>
            </>
          )}
          <Link to={"/kontakty"}>Kontakty</Link>
        </div>
      </div>
      <div className='vpravo'>
        <Link to={"/"}>Domovská stránka</Link>
        <Link to={"/menu"}>Produkty</Link>
        <Link to={"/about"}>O nás</Link>
        {!user && (
          <>
            <Link to={"/registrace"}>Registrace</Link>
            <Link to={"/login"}>Login</Link>
          </>
        )}
        <Link to={"/kontakty"}>Kontakty</Link>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navigace