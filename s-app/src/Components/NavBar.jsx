import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import {HamburgetMenuClose, HamburgetMenuOpen} from "./Icons.jsx";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "../slices/credentialsSlice";


function NavBar(){
    const {email, name} = useSelector((state) => state.credentials);
    const dispatch = useDispatch();
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth >= 960) {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth >= 960) {
            setDropdown(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navigate = useNavigate(); // Get the navigate function

    const handleLogout = () => {
        dispatch(clearCredentials())
        localStorage.removeItem('userEmail');
        navigate('/Login'); // Redirect to the login page

      };


    return(
        <nav className="navbar">
            <div className="navbar">
                <NavLink  className="nav-logo">
                    <span>Micro-Economics</span>
                </NavLink>

                
                {(email == null || email == '') && (
                    <div className="navbar">
                        <li className="nav-item">
                        <NavLink
                             exact
                             to="/Login"
                             activeClassName="active"
                             className="nav-links"
                             onClick={handleClick}
                             >
                                 Log In
                             </NavLink>
                         </li>
                         <li className="nav-item">
                         <NavLink
                             exact
                             to="/SignUpForm"
                             activeClassName="active"
                             className="nav-links"
                             onClick={handleClick}
                             >
                                 Sign Up
                             </NavLink>
                         </li>
                    </div>
                )}

                {(email !== null && email !== '') && (
                    <div className="navbar">
                        <li className="nav-item">
                        <NavLink
                             exact
                             to="/home"
                             activeClassName="active"
                             className="nav-links"
                             onClick={handleClick}
                             >
                                 Home
                             </NavLink>
                        </li>
                    
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li 
                        className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        ref={dropdownRef}
                    >
                        <NavLink
                            exact
                            to="/Lessons"
                            activeClassName="active"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Lessons
                        </NavLink>
                    

                        <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`}>
                            <li>
                                <NavLink
                                    to="/Lessons/Lesson_1"
                                    className="dropdown-link"
                                    onClick={closeMobileMenu}
                                >
                                    Lesson 1
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/Lessons/Lesson_2"
                                    className="dropdown-link"
                                    onClick={closeMobileMenu}
                                >
                                    Lesson 2
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                        <li>
                         <button class="logout-button" onClick={handleLogout}>Logout</button>
                         </li>

                </ul>
                        
                    </div>
                )}


{/* Part above or part below */}
                
{/* 
                    <div className="navbar">
                        <li className="nav-item">
                        <NavLink
                             exact
                             to="/Login"
                             activeClassName="active"
                             className="nav-links"
                             onClick={handleClick}
                             >
                                 Log In
                             </NavLink>
                         </li>
                         <li className="nav-item">
                         <NavLink
                             exact
                             to="/SignUpForm"
                             activeClassName="active"
                             className="nav-links"
                             onClick={handleClick}
                             >
                                 Sign Up
                             </NavLink>
                         </li>
                    </div>





                <div className="navbar">
                        <li className="nav-item">
                        <NavLink
                             exact
                             to="/home"
                             activeClassName="active"
                             className="nav-links"
                             onClick={handleClick}
                             >
                                 Home
                             </NavLink>
                        </li>
                    
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li 
                        className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        ref={dropdownRef}
                    >
                        <NavLink
                            exact
                            to="/Lessons"
                            activeClassName="active"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Lessons
                        </NavLink>
                    

                        <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`}>
                            <li>
                                <NavLink
                                    to="/Lessons/Lesson_1"
                                    className="dropdown-link"
                                    onClick={closeMobileMenu}
                                >
                                    Lesson 1
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/Lessons/Lesson_2"
                                    className="dropdown-link"
                                    onClick={closeMobileMenu}
                                >
                                    Lesson 2
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                        <li>
                         <button class="logout-button" onClick={handleLogout}>Logout</button>
                         </li>

                    </ul>
                        
                    </div> */}


                <div className="nav-icon" onClick={handleClick}>
                    {click ? (
                        <span className="icon">
                            <HamburgetMenuClose />{" "}
                        </span>
                    ) : (
                        <span className="icon">
                            <HamburgetMenuOpen />
                        </span>
                    )}
                </div>
            </div>    
        </nav>
    );
}

export default NavBar;