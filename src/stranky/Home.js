import React from 'react'
import { Link } from 'react-router-dom'
import Pozadi from '../obrazky/Pozadi.jpeg'
import '../styl/Home.css'
function Home() {
  return (
    <div className='home'>
      <div className='homeText' style={{backgroundImage: `url(${Pozadi})`}}>
        <h1>Libišské vánočky</h1>
        <p>Nejlepší pečivo na světě</p>
        <Link to={'/menu'}>
        <button>Produkty</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Home

