import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Markdown from '../Markdown/Markdown';
import Footer from '../Footer/Footer';

export default function App( ) {
  const [user, setUser] = useState(getUser());

  return (
    <>
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      { user ?
          <>
          {/* <Markdown path=""/> */}
            <Routes>
              <Route path='/' element={< Markdown user={user} />}/>
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
    <Footer />
    </>
  );
}
