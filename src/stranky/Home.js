import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='home'>
      <div className='homeText'>
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

