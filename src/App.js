import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login';

console.log(Login)
function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Login />
          </div>
  );
}

export default App;
