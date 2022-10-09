import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {AiFillSafetyCertificate} from 'react-icons/ai'

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
              <small>1+ years learning</small>
            </article>
            <article className='about__card'>
              <AiFillSafetyCertificate/>
              <h5>Certifications</h5>
              <small>5 certificates</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary/>
              <h5>Projects</h5>
              <small>15+ completed</small>
            </article>
          </div>

          <p>
          I am a passionate critical thinker and I love to solve problems. I am also an undergraduate mechanical engineer who speaks Chinese with intermediate fluency and I love to keep myself updated, contribute to open source, write algorithms on <a href="hackerrank.com">Hackerrank</a> and play chess in my free time.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
