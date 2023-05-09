import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import * as userService from '../../utilities/users-service';
import Icon from '../../assets/images/icon.png'

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='navbar'>
        <img src={Icon} className='navicon' alt='paper logo' />
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
