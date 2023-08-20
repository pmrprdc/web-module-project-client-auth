import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';



export default function Menu () {
    

    return(

        <header>
        <h1>FRIENDS DATABASE</h1>
      <Link to="./login">LOGIN </Link> 
      <Link to="./friends">FRIENDSLIST </Link>
      <Link to="./login">ADDFRIEND </Link>
      <Link to="./login">LOGOUT </Link>
    
      </header>
    
        
    )
}
