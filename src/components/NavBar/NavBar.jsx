import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link>Log In</Link>
      &nbsp; | &nbsp;
      <Link>View Saved</Link>
      &nbsp;&nbsp;
      <Link to="/makeme">New Markdown</Link>
      &nbsp;&nbsp;
      <Link>Premade Templates</Link>
      &nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}