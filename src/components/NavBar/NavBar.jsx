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
      <Link className='navlink'>Log In</Link>
      &nbsp;&nbsp;
      <Link className='navlink'>View Saved</Link>
      &nbsp;&nbsp;
      <Link className='navlink' to="/templates">Templates</Link>
      &nbsp;&nbsp;
      <Link className='navlink' to="/new">Markdown</Link>
      &nbsp;&nbsp;
      <Link className='navlink' to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}