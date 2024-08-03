import React from 'react'
import CV from '../../assets/cv.pdf'
import UP from '../../assets/upworkjss.png'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        <a href="https://www.upwork.com/freelancers/~01be3c7a48bd073ba0" className='btn btn-primary'>Upwork</a>
    </div>
  )
}

export default CTA