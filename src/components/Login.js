// Import the necessary modules and packages
import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
// Define the component function
function Login() {


    console.log(localStorage.getItem('token'))
  return (
    <div>
        
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
