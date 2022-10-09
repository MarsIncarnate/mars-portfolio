import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_marsreborn', 'template_1lcm1gb', form.current, 'j89uG_FtQt_ewZl9N')
    e.target.reset()
  }
  return (
    <div>
      <section id='contact'>
        <h5>Get In touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail/>
              <h4>Email</h4>
              <h5>marvellousadeogun@gmail.com</h5>
              <a href="mailto:marvellousadeogun@gmail.com" target='__blank'>Send a message</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp/>
              <h4>WhatsApp</h4>
              <h5>+2349038852706</h5>
              <a href="https://api.whatsapp.com/send?phone=+2349038852706" target='__blank'>Send a message</a>
            </article>
            <article className="contact__option">
              <MdOutlineEmail/>
              <h4>LinkedIn</h4>
              <h5>marvellousadeogun@gmail.com</h5>
              <a href="https://www.linkedin.com/in/marvellous-adeogun-4a4550216" target='__blank'></a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Name' required />
            <input type="email" name="email" placeholder='Your email' required />
            <textarea name="message" rows="7" placeholder='Your message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
