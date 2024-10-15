import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './Login.css'
import { useDispatch } from "react-redux";
import { setCredentials } from "../../slices/credentialsSlice";



function Login(){
    
    const [name, setName] =useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch();
    
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      
  
      try {
          const response = await axios.post('http://localhost:3001/login', {email, password });
          console.log('API response', response);

          if (response.data && 
            (response.data === "Incorrect Password" || response.data === "No record existed")) {
              // Store user details like email and name in localStorage
              setError(response.data);
            }else{
                localStorage.setItem('userEmail', email);
                dispatch(setCredentials({
                  email: response.data.email,
                  name: response.data.name,
              }));
              navigate('/home');
            }
              

      } catch (err) {
          console.error('Login error', err);
          if (err.response && err.response.status !== 200) {
              setError('Invalid email or password. Please try again.');
          } else {
              setError('An error occurred. Please try again later.');
          }
      }
  };
  

        
    return(
     
        <div class="login-container">
                <h3>Log In</h3>
                <form onSubmit={handleSubmit}>
                <div >
                    <label className="input-label" htmlFor="email">
                        Email
                    </label>
                    <input class="input-group"
                        type="email"
                        placeholder="Enter Email"
                        autoComplete="off"
                        name="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label class="input-label" htmlFor="email">
                        Password
                    </label>
                    <input class="input-group"
                        type="password"
                        placeholder="Enter Password"
                        autoComplete="off"
                        name="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    class="login-button"
                    type="submit"
                    >
                        Login
                </button>
                </form>
                {error && <p class="err-msg"> {error}</p>}
                <div class="alt-text">
                <p>Don't have an account? 
                 <Link to="/SignUpForm" class="alt-link">
                    Sign Up
                </Link>
                </p>
                </div>
            </div>
         
    )
}

export default Login;

