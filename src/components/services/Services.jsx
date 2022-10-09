import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>API development and integration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>SQL database management.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Fixing bugs and testing for usability.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Authorizational web security.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Database configuration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom development.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Using HTML, CSS and JavaScript to bring concepts to life.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Optimizing user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developing and maintaining user interface.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementing design on mobile websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Following SEO best practices.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Cloud Services</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Dockerization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Continuous Integration and Deployment</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Amazon Web Services</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
