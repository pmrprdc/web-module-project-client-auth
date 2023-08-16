// Import the necessary modules and packages
import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
// Define the component function
function Login() {
  return (
    <div>
        <header>
        <h1>FRIENDS DATABASE</h1>
      <Link to="./login">LOGIN</Link>
      <Link to="./login">FRIENDSLIST</Link>
      <Link to="./login">ADDFRIEND</Link>
      <Link to="./login">LOGOUT</Link>
    
      </header>
      <h1>LOGIN   
      </h1>
      <label htmlFor="email">Email 
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
      />
      </label>

    <br></br>
      <label htmlFor="email">Password 
      
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
      />
      </label>
      <br></br>
      <button>SUBMIT</button>
      

    </div>
  );
}

// Export the component
export default Login;
