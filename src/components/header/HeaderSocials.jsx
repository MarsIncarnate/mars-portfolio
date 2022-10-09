import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/marvellous-adeogun-4a4550216" target="_blank"><AiOutlineLinkedin/></a>
        <a href="https://github.com/MarsIncarnate" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/MarsReborn?t=J89VEvz3LWThK9-ozxDSXQ&s=09" target="_blank"><AiFillTwitterCircle/></a>
    </div>
  )
}

export default HeaderSocials