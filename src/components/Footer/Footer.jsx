import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='footerlink'>
          <a href="https://www.linkedin.com/in/-trevorcampbell" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className='footerlink' />
          </a>
          <a href="https://github.com/RareTC" target='_blank' rel='noopener noreferrer'>
            <GitHubIcon className='footerlink' />
          </a>

        </div>
        <p className='cc'> &copy; 2023 Trevor's Project</p>
      </div>
    </>
  )
}
