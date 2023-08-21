// Import the necessary modules and packages
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { username } from '../mocks/credentials';
// Define the component function
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    
    const navigate = useNavigate();
    
    const serverUrl = 'http://localhost:9000';
  


    useEffect(()=> {
     
    
    
  
    },[])



    const clickHandler = (e) => {

        
        
        axios.post(`${serverUrl}/api/login`, {username: username, password: password})
        .then((response) => {
          // Handle the successful response here
         
          const { token } = response.data;
          localStorage.setItem('token', token);
          console.log("success")
          

          navigate('/friends')
    
        })
        .catch((error) => {
          // Handle errors here
          console.error('Error:', error);
        });
        

    }
  
  return (
    
    <div>
        
      <h1>LOGIN   
      </h1>
      <label htmlFor="email">Email 
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}    
        onChange={(e)=> setEmail(e.target.value)}
        />
      </label>

    <br></br>
      <label htmlFor="email">Password 
      
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />
      </label>
      <br></br>
      <button onClick={clickHandler}>SUBMIT</button>
      

    </div>
  );
}

// Export the component
export default Login;
