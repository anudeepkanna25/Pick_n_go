import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { validateEmail, validatePhone, validatePassword } from '../utils/Validation';
import './CustomerSignIn.css';

const CustomerSignIn = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [registerError, setRegisterError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showContactInfo, setShowContactInfo] = useState(false);
  const navigate = useNavigate();

  const toggleForms = () => {
    setIsLoginForm(!isLoginForm);
    setRegisterError('');
    setLoginError('');
  };

  const register = async () => {
    const email = document.getElementById('newEmail').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('newPassword').value;

    if (!validateEmail(email)) {
      setRegisterError('Please enter a valid email address.');
      return;
    }

    if (!validatePhone(phone)) {
      setRegisterError('Phone number must be 10 digits.');
      return;
    }

    if (!validatePassword(password)) {
      setRegisterError('Password must be at least 6 characters long.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      alert('Registration successful! Please check your email to verify your account.');
      toggleForms();
    } catch (error) {
      setRegisterError(error.message);
    }
  };

  const login = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      setLoginError('Please enter both email and password.');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (!userCredential.user.emailVerified) {
        setLoginError('Please verify your email before logging in.');
        return;
      }

      localStorage.setItem('token', userCredential.user.uid);

      // Redirect based on email
      if (email === 'laxmiretail@gmail.com') {
        navigate('/shopkeeperCart');
      } else {
        navigate('/items');
      }
    } catch (error) {
      setLoginError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>LAXMI KIRANA STORE</h1>
      {isLoginForm ? (
        <div id="loginForm">
          <h2>Login</h2>
          <form>
            <input type="text" id="email" placeholder="Email" required />
            <input type="password" id="password" placeholder="Password" required />
            {loginError && <p className="error">{loginError}</p>}
            <button type="button" onClick={login}>Login</button>
          </form>
          <p className="toggle" onClick={toggleForms}>Don't have an account? Register here</p>
          <p className="toggle"><Link to="/shopkeeper">Login here if you are a shopkeeper</Link></p>
        </div>
      ) : (
        <div id="registerForm">
          <h2>Register</h2>
          <form>
            <input type="text" id="newEmail" placeholder="Email" required />
            <input type="tel" id="phone" placeholder="Phone Number" required />
            <input type="password" id="newPassword" placeholder="Password" required />
            {registerError && <p className="error">{registerError}</p>}
            <button type="button" onClick={register}>Register</button>
          </form>
          <p className="toggle" onClick={toggleForms}>Already have an account? Login here</p>
          <p className="toggle"><Link to="/shopkeeper">Login here if you are a shopkeeper</Link></p>
        </div>
      )}
      <div 
        className="contact-us" 
        onClick={() => setShowContactInfo(!showContactInfo)}
      >
        Contact Us
      </div>
      {showContactInfo && (
        <div className="contact-info">
          <p>Phone: 7702387254</p>
          <p>Email: laxmiretail@gmail.com</p>
        </div>
      )}
    </div>
  );
};

export default CustomerSignIn;
