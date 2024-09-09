import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css';
import { FoodContext } from '../ContextAPI/FoodContext';

function Login() {
  const { login } = useContext(FoodContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isSuccess = await login(username, password);
      if (isSuccess) {
        console.log("Login successful");
        setUsername('');
        setPassword('');
        navigate("/hero");
      } else {
        setMessage('Incorrect Username and Password, try again');
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className={style.box}>
      <form className={style.form}>
        <h1>Login</h1>
        <h6>{message === '' ? 'Please Enter the Details Below' : message}</h6>
        <div className={style.form_group}>
          <input 
            type='text' 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder='Enter username...' 
            value={username}
          />
        </div>
        <div className={style.form_group}>
          <input 
            type='password' 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Enter password' 
            value={password}
          />
        </div>
        <div className={style.form_button}>
          <button onClick={handleSubmit}>SIGN IN</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
