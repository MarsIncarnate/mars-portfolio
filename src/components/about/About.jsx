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
          I am a results-driven developer with a background in mechanical engineering and intermediate-level Chinese language skills. I excel in web scraping, data management, and API integration, and I have a track record of extracting, structuring, and managing large datasets. Notably, I scraped data from TripAdvisor, overcoming their restriction on Web Crawlers and I also developed a medical cannabis dashboard that processed extensive prescription data within Australia spanning 11 years, revealing crucial market trends. My passion for problem-solving extends to contributing to open-source projects, honing algorithmic skills on platforms like Hackerrank, and strategizing in games like chess and Scrabble. I offer a unique blend of technical proficiency, linguistic capabilities, and a relentless drive for excellence, making me an ideal candidate for web scraping, data management, and API-related projects.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
