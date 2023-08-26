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
    const [error, setError] = useState("")
    
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
           setError("") 
          navigate('/friends')
            
        })
        .catch((error) => {
          // Handle errors here
         
          setError(error.message+ "PLEASE TRY AGAIN")
        });
        

    }
  
  return (
    
    <div>
        
      <h1 className='login-header'>LOGIN   
      </h1>
      {error.length>1 ? <h2>{error}</h2> : ""}
      <div className='login-input-container'>

        <div className='login-email-container'>
         <label classname="login-email-label" htmlFor="email">
            Email  </label>
                <input
                    className="login-email-input"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}    
                    onChange={(e)=> setEmail(e.target.value)}
                    />
       
        
        </div>       
     

    
        <div className='login-pw-container'>
                <label className='login-password-label' htmlFor="password">
                    Password</label>
                    <input
                        type="password"
                        className="login-password-input"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        />
             
        </div>
      
     


        

      </div>
     
     
      <button className='login-submit-btn' onClick={clickHandler}>SUBMIT</button>
      

    </div>
  );
}

// Export the component
export default Login;
