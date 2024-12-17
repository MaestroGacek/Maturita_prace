import React from 'react'
import Logo from "../obrazky/Logo.png"
import { Link } from 'react-router-dom'
import "../styl/Navigace.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from 'react';

function Navigace() {
  const [otevriLink, setOtevritLink] = useState(false);

  const toggleNavbar = () => {
    setOtevritLink(!openLinks);
    }
  return (
    <div className='navigace'>
      <div className='vlevo' id={otevriLink ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className='hiddenLinks'>
          <Link to={"/"}>Domovská stránka</Link>
          <Link to={"/menu"}>Produkty</Link>
          <Link to={"/about"}>O nás</Link>
          <Link to={"/kontakty"}>Kontakty</Link>
        </div>
      </div>
      <div className='vpravo'>
        <Link to={"/"}>Domovská stránka</Link>
        <Link to={"/menu"}>Produkty</Link>
        <Link to={"/about"}>O nás</Link>
        <Link to={"/kontakty"}>Kontakty</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navigace