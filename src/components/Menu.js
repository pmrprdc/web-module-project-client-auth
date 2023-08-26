import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';



export default function Menu () {
    

    return(

        <header className='app-menu-container'>
        <h1>FRIENDS DATABASE</h1>
      <Link to="./login">LOGIN </Link> 
      <Link to="./friends">FRIENDSLIST </Link>
      <Link to="/friends/add">ADDFRIEND </Link>
      <Link to="./logout">LOGOUT </Link>
    
      </header>
    
        
    )
}
