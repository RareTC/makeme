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
        { showSignUp ?
            <SignUpForm setUser={setUser} />
            :
            <LoginForm setUser={setUser} />
          }
          <p className='signuptext' onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Or Log In Here' : 'Or Sign Up Here'}</p>
        </div>
    </main>
  );
}