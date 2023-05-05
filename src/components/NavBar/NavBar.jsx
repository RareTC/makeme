import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import * as userService from '../../utilities/users-service';
import MarkdownTemplates from '../../components/MarkdownTemplates/MarkdownTemplates';

export default function NavBar({ user, setUser }) {
  const [showDropdown, setShowDropdown] = useState(false);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='navbar'>
      <Link className='navlink' to="/">New</Link>
        <Link 
          className='navlink' 
          to="/" 
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Templates ↡
        </Link>
      <div className='nav-dropdown'>
        {showDropdown && <MarkdownTemplates />}
      </div>
      { user ? 
        <>
          {/* <Link className='navlink' to="/saved">My Projects</Link> */}
          <Link className='navlink' to="/" onClick={handleLogOut}>Log Out</Link>
        </>
        :
        <Link className='navlink'>Log In</Link>
      }
    </nav>
  );
}
