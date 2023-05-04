import { Link } from 'react-router-dom';
import './Navbar.css';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='navbar'>
      <Link className='navlink' to="/">New</Link>
      <Link className='navlink' to="/templates">Templates</Link>
      { user ? 
      <>
      <Link className='navlink' to="/saved">My Projects</Link>
      <Link className='navlink' to="/" onClick={handleLogOut}>Log Out</Link>
      </>
      :
      <Link className='navlink'>Log In</Link>
    }
    </nav>
  );
}