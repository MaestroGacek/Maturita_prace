import React from 'react'
import '../styl/Kontakty.css';
import Pozadi from '../obrazky/Pozadi.jpeg';

function Kontakty() {
  return (
    <div className='kontakty'>
        <div className='vlevo' style={{backgroundImage: `url(${Pozadi})`}}></div>
        <div className='vpravo'>
            <h1>Kontaktujte nás</h1>
            <p>Adresa: Husova 557, Libiš</p>
            <p>Telefon: 755 657 042</p>
            <p>Email: libisske.vanocky@icloud.com</p>
    
        </div>
    </div>
  )
}

export default Kontakty;