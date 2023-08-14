import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <Link to="./login">Login</Link>
    </div>
  );
}

export default App;
