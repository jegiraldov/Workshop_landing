// import { useState } from 'react'
import instagramLogo from './assets/icon-instagram.svg'
import twitterLogo from './assets/icon-twitter.svg'
import facebookLogo from './assets/icon-facebook.svg'
import pinterestLogo from './assets/icon-pinterest.svg'
import logoPrincipal from './assets/logo.svg'
import './footer.scss'

function App() {
  return (
    <>
      <div className='footer-left'>
        <img src={logoPrincipal} className='logo-principal' alt="logo principal" />
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Product</li>
          <li>Support</li>
        </ul>
      </div>
      
      <div className='footer-right'>
        <div className='logos-redes'>
          <a href="/" target="">
            <img src={instagramLogo} className="logo" alt="Instagram logo" />
          </a>
          <a href="/" target="">
            <img src={twitterLogo} className="logo react" alt="Twitter logo" />
          </a>
          <a href="/" target="">
            <img src={facebookLogo} className="logo react" alt="Facebook logo" />
          </a>
          <a href="/" target="">
            <img src={pinterestLogo} className="logo react" alt="Pinterest logo" />
          </a>
        </div>

        <p className="read-the-docs">
        2021 Loopstudios. All right reserved.
        </p>
      </div>
    </>
  )
}

export default App
