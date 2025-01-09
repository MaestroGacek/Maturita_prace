import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styl/Spodek.css'

function Spodek() {
  return (
    <div className='spodek'>
        <div className='social'>
            <a href="https://www.instagram.com/libisske_vanocky/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="instagram-icon"/>
            </a>
        </div>
        <p>Copyright &copy; 2025 www.libisske-vanocky.com</p>
    </div>
  )
}

export default Spodek
