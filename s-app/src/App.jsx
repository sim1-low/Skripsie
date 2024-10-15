
import './App.css'
import NavBar from "./Components/NavBar.jsx";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./Components/pages/Home.jsx";
import Login  from "./Components/pages/Login.jsx"                   
import {Profile} from './Components/pages/Profile.jsx';
import { Lessons } from './Components/pages/Lessons.jsx';
import {Lesson_1} from './Components/pages/Lesson_1.jsx';
import {Lesson_2} from './Components/pages/Lesson_2.jsx';
import Signup from './SignUpForm.jsx';
import { Quiz_1 } from './Components/Quiz/Quiz_1.jsx'
import store from './store.jsx';
import { Provider } from "react-redux";
import React from 'react';

function App() {

  return (
    <>
    <Provider store={store}>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Lessons" element={<Lessons />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/SignUpForm" element={<Signup />}/>
            <Route path="/Profile" element={<Profile />}/>
            <Route path="/Lessons/Lesson_1" element={<Lesson_1 />}/>
            <Route path="/Lessons/Lesson_2" element={<Lesson_2 />}/>
            <Route path="/Quiz_1" element={<Quiz_1 />}/>

            
          </Routes>
        </div>
      </Router>
      </Provider>
    </>
  );
}

export default App;
