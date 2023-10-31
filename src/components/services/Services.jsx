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
              <p>Custom API development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Third-party API integration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>SQL database design and optimization.</p>
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
              <p>Fixing bugs and testing for usability.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Server-side development for web applications.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Scraping & Data Acquisition</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom web scraping solutions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Overcoming web scraping challenges with custom user agents.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Automated navigation and data extraction from multiple web pages.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementation of IP rotation strategies to avoid scraping restrictions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementation of IP rotation strategies to avoid scraping restrictions.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Data Management</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Efficient storage and processing of extensive datasets.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Scalable solutions for handling large data volumes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cloud Services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Automated processes and scripts for data handling</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Server-side development for data-driven applications</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
