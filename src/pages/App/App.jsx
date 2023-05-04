import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Markdown from '../Markdown/Markdown';
import SavedMarkdown from '../SavedMarkdown/SavedMarkdown';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
          <NavBar user={user} setUser={setUser} />
          {/* <Markdown path=""/> */}
            <Routes>
              <Route path='/' element={< Markdown />}/>
              <Route path='/saved' element={<SavedMarkdown user={user} setUser={setUser} />}/>
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
