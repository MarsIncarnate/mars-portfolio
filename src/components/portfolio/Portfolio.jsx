import React from 'react'
import './portfolio.css'
import TRAY from '../../assets/traywicklaw.png'
import FYUUR from '../../assets/artistBooking.jpg'
import TRIVIA from '../../assets/trivia.jpg'
import COFFEE from '../../assets/coffee.jpg'
import HOTELA from '../../assets/HOTELA.png'
import BRAZ from '../../assets/brazil.png'
import DOGS from '../../assets/dogsdir.png'
import RSBINN from '../../assets/rsbinn.png'
import DATA from '../../assets/dataStruct.jpg'
import hotel from '../../assets/Hotela.pdf'
import dogspdf from '../../assets/dogsdirectcouk.pdf'
import frombraz from '../../assets/from-brazil.pdf'
import traywick from '../../assets/traywicklawoffices.pdf'



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={HOTELA} alt="" />
          </div>
          <h3>HOTELA</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.hotela.co.jp/" className='btn btn-primary' target='__blank'>Live Site</a>
            <a href={hotel} download className='btn'> Download PDF</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={DOGS} alt="" />
          </div>
          <h3>Dogs Direct UK</h3>
          <div className="portfolio__item-cta">
            <a href="https://dogsdirectuk.co.uk/" className='btn btn-primary' target='__blank'>Live Site</a>
            <a href={dogspdf} download className='btn'> Download PDF</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={TRAY} alt="" />
          </div>
          <h3>Traywick Law Offices</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.traywicklaw.com/" className='btn btn-primary' target='__blank'>Live Site</a>
            <a href={traywick} download className='btn'> Download PDF</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={BRAZ} alt="" />
          </div>
          <h3>From Brazil</h3>
          <div className="portfolio__item-cta">
            <a href="https://frombrazil.info/" className='btn btn-primary' target='__blank'>Live Site</a>
            <a href={frombraz} download className='btn'> Download PDF</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={RSBINN} alt="" />
          </div>
          <h3>RSBInnovations</h3>
          <div className="portfolio__item-cta">
            <a href="https://rsbinn.com/" className='btn btn-primary' target='__blank'>Live Site</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={COFFEE} alt="" />
          </div>
          <h3>Digital Coffee Shop</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MarsIncarnate/coffee_shop" className='btn' target='__blank'>GitHub</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img id="fyuur" src={FYUUR} alt="" />
          </div>
          <h3>Fyuur Artist Booking Site</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MarsIncarnate/Fyuur-Artist-Booking-Site" className='btn' target='__blank'>GitHub</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img id="fyuur" src={TRIVIA} alt="" />
          </div>
          <h3>Udacitrivia</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MarsIncarnate/udacitrivia" className='btn' target='__blank'>GitHub</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
