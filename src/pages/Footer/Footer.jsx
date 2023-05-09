import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

export default function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='footerlink'>
            <Link to="https://www.linkedin.com/in/-trevorcampbell" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className='footerlink'/>
            </Link>
            <Link to="https://github.com/RareTC" target='_blank' rel='noopener noreferrer'>
                <GitHubIcon className='footerlink'/>
            </Link>
        </div>
        <p className='cc'> &copy; 2023 Trevor's Project</p>
    </div>
    </>
  )
}
