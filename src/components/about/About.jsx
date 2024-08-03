import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {AiFillSafetyCertificate} from 'react-icons/ai'
import { FaCrown } from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward/>
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>
            <article className='about__card'>
              <AiFillSafetyCertificate/>
              <h5>Certifications</h5>
              <small>7 certificates</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary/>
              <h5>Projects</h5>
              <small>25+ completed</small>
            </article>
          </div>

          <p>
          Hi there! I'm Marvellous, a dedicated fullstack developer with expertise in Wix Velo, frontend and backend development. 
          I specialize in crafting tailored, user-friendly websites that help small and medium-sized businesses overcome digital challenges and thrive online.
          As a certified Wix Velo developer, I excel in building and optimizing Wix sites, offering custom functionalities like complex animations, interactive components, advanced CMS logic and quick bug fixes to meet your business needs. 
          My proficiency in web design with UI/UX, Webflow and WordPress allows me to translate your design vision into pixel-perfect, responsive websites, 
          ensuring they are fast, functional, and visually stunning across all devices.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
