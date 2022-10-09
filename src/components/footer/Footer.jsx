import React from 'react'
import './footer.css'
import {IoLogoTwitter} from 'react-icons/io'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import MARS from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'><img src={MARS}/></a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://github.com/MarsIncarnate" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/MarsReborn?t=J89VEvz3LWThK9-ozxDSXQ&s=09"><IoLogoTwitter/></a>
        <a href="https://www.linkedin.com/in/marvellous-adeogun-4a4550216"><AiOutlineLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MarsReborn. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
