import { useState } from 'react';
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className='auth-main'>
      <div className='auth-container'>
        <h1 className='auth'>Authorization Page</h1>
        <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
        { showSignUp ?
            <SignUpForm setUser={setUser} />
            :
            <LoginForm setUser={setUser} />
        }
        </div>
    </main>
  );
}