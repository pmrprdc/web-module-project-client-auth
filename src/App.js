import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu'
import axios from 'axios';
import Friends from './components/Friendslist'
import Addfriend from './components/Addfriend';
import Logout from './components/Logout';





function App() {

  










  return (
 
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/friends" element={<Friends/>} />
        <Route path="/addfriend" element={<Addfriend/>} />
        <Route path="/logout" element= {<Logout />} />
      </Routes>
    
          </div>
  );
}

export default App;
