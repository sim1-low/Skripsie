import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const navigate =useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isChecked) {
            alert("You must agree to the terms before submitting.");
            return;
        }
        axios.post('https://skripsie-backend.vercel.app/register', {name, email, password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err => console.log(err))
    }

    return(
        
            <div class="login-container">
                <h3>Register</h3>
                <form onSubmit={handleSubmit}>
                <div>
                    <label class="input-label" htmlFor="name">
                        Create Username
                    </label>
                    <input class="input-group"
                        type="name"
                        placeholder="Enter Username"
                        autoComplete="off"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div >
                    <label class="input-label" htmlFor="email">
                        Email
                    </label>
                    <input class="input-group"
                        type="email"
                        placeholder="Enter Email"
                        autoComplete="off"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div >
                    <label class="input-label" htmlFor="email">
                        Password
                    </label>
                    <input class="input-group"
                        type="password"
                        placeholder="Enter Password"
                        autoComplete="off"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                    <div>
                    <input
                        type="checkbox"
                        id="data-awareness"
                        onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    <label htmlFor="data-awareness" className="checkbox-label">
                        I am aware that my data will be seen
                    </label>
                </div>
                <button 
                    class="login-button"
                    type="submit"
                    >
                        Register
                </button>
                </form>
                <div class="alt-text">
                <p>Already Have an Account?
                 <Link to="/Login" class="alt-link">
                    Login
                </Link>
                </p>
                </div>
            </div>
       
    )
}

export default Signup;
