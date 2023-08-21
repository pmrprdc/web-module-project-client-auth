import React from "react";
import { Route, useNavigate} from "react-router-dom";


export default function Logout () {
    const navigate = useNavigate();


    const clickHandler = (e) => {
        
        navigate("/login")
        localStorage.removeItem("token")


    }

    return ( 
        
        <>
         <h1>Want to log out ?</h1>
        <button onClick = {clickHandler}>Click here</button>
        </>
       
        
    )
}