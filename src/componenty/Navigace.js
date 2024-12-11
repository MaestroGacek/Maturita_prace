import React from 'react'
import Logo from "../obrazky/Logo.jpg"
import { Link } from 'react-router-dom'
import "../styl/Navigace.css"

function Navigace() {
  return (
    <div className='navigace'>
      <div className='levo'>
        <img src={Logo}></img>
      </div>
      <div className='vpravo'></div>
      <Link to={"/"}>Domovská stránka</Link>
      <Link to={"/menu"}>Produkty</Link>
      <Link to={"/about"}>O nás</Link>
      <Link to={"/contact"}>Kontakty</Link>
    </div>
  )
}

export default Navigace

