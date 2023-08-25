import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu'
import Friends from './components/Friendslist'
import Addfriend from './components/Addfriend';
import Logout from './components/Logout';
import PrivateRoutes from './components/PrivateRoutes'





function App() {

  
  return (
 
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Login/>} />
        <Route element={<PrivateRoutes />}>
            <Route path="/friends" element={<Friends/>} exact />
            <Route path="/friends/add" element={<Addfriend/>}  exact/>
            <Route path="/logout" element= {<Logout />} exact />
        </Route>
        
      </Routes>
    
          </div>
  );
}

export default App;
