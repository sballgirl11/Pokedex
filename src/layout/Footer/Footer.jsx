import React from 'react'
import './styles.css'
import Facebook from './img/facebook.png'
import Twitter from './img/twitter.png'
import Linkedin from './img/linkedin.png'
import Github from './img/github.png'

const Footer = () => {
  return (
    <footer>
      <div className='links'>
        <a
          href='https://www.facebook.com/b.Designed11/'
          rel='noopener noreferrer'
          target='_blank'>
          <img src={Facebook} alt='facebook' />
        </a>
        <a
          href='https://twitter.com/BrittneyPostma'
          rel='noopener noreferrer'
          target='_blank'>
          <img src={Twitter} alt='twitter' />
        </a>
        <p>
          <a
            href='https://bdesigned.netlify.com/'
            rel='noopener noreferrer'
            target='_blank'>
            b.Designed
          </a>
        </p>
        <a
          href='https://www.linkedin.com/in/brittney-postma-868928178/'
          rel='noopener noreferrer'
          target='_blank'>
          <img src={Linkedin} alt='linkedin' />
        </a>
        <a
          href='https://github.com/sballgirl11'
          rel='noopener noreferrer'
          target='_blank'>
          <img src={Github} alt='github' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
