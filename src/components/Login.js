// Import the necessary modules and packages
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
// Define the component function
function Login() {

    const navigate = useNavigate();

    const clickHandler = (e) => {

        
        navigate('/friends')

    }

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
      <button onClick={clickHandler}>SUBMIT</button>
      

    </div>
  );
}

// Export the component
export default Login;
