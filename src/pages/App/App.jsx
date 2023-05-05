import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Markdown from '../Markdown/Markdown';

export default function App( {setMarkdown} ) {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
          <NavBar user={user} setUser={setUser} setMarkdown={setMarkdown} />
          {/* <Markdown path=""/> */}
            <Routes>
              <Route path='/' element={< Markdown />}/>
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
