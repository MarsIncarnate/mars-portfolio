import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import FYUUR from '../../assets/fyuur.png'
import TRIVIA from '../../assets/udacitrivia.png'
import COFFEE from '../../assets/coffee.png'
import DEPLOY from '../../assets/serverdeploy.png'
import NETFLIX from '../../assets/netflix.png'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Game Warrior clone</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MarsIncarnate/Game-Warrior-Clone" className='btn' target='__blank'>GitHub</a>
            <a href="https://marsgamewarrior.netlify.app/" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img id="fyuur" src={FYUUR} alt="" />
          </div>
          <h3>Fyuur booking site</h3>
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
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={DEPLOY} alt="" />
          </div>
          <h3>Cloud deployment and Containerization.</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MarsIncarnate/cd0157-Server-Deployment-and-Containerization" className='btn' target='__blank'>GitHub</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={COFFEE} alt="" />
          </div>
          <h3>Coffee Shop</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MarsIncarnate/coffee_shop" className='btn' target='__blank'>GitHub</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
