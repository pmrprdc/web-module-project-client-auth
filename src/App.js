import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu'

console.log(Login)
function App() {
  return (
 
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/login" element={<Login/>} />
       
      </Routes>
    
          </div>
  );
}

export default App;
