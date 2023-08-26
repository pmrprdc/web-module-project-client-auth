import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';



export default function Menu () {
    

    return(
        <>
        <h1 className='menu-header'>FRIENDS DATABASE</h1>
        <header className='app-menu-container'>
       
      <Link to="./login">LOGIN </Link> 
      <Link to="./friends">FRIENDSLIST </Link>
      <Link to="/friends/add">ADDFRIEND </Link>
      <Link to="./logout">LOGOUT </Link>
    
      </header>
        </>
        
    
        
    )
}
