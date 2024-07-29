import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './CustomerSignIn.css';

const ShopkeeperSignIn = () => {
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate(); 

  const login = async () => {
    const email = document.getElementById('shopkeeperEmail').value;
    const password = document.getElementById('shopkeeperPassword').value;

    // Credentials of the shopkeeper
    if (email === 'laxmiretail@gmail.com' && password === 'laxmi2000') {
      localStorage.setItem('shopkeeperToken', email); 
      navigate('/shopkeeperCart'); 
    } else {
      setLoginError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>LAXMI KIRANA STORE</h1>
      <form>
        <input type="text" id="shopkeeperEmail" placeholder="Email" required />
        <input type="password" id="shopkeeperPassword" placeholder="Password" required />
        {loginError && <p className="error">{loginError}</p>}
        <button type="button" onClick={login}>Login</button>
      </form>
    </div>
  );
};

export default ShopkeeperSignIn;
