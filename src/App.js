import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu'

console.log(Login)
function App() {
  return (
    <div className="App">
      <Menu />
      <Login />
          </div>
  );
}

export default App;
