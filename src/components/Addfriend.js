import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';




export default function Addfriend () {
    const [error, setError] = useState ("");
    const  [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const clickHandler = (e) => {
            console.log('add friend clicked')
            if(name.length>3 && email.length>3) {
                console.log("success")
                setError("")
            } else {
                setError ("error, make sure you type a correct email and name greater than 3 characters")
            }


    }
    
    const changeHandlerText =(e) => {
        setName(e.target.value)
    }

    const changeHandlerEmail =(e) => {
        setEmail(e.target.value)

    }


    return(

        <header>
            <h1>Add a friend!</h1>
            <input onChange={changeHandlerText} type="text"  placeholder='friend name' value={name} />
            <br></br>
            <input onChange={changeHandlerEmail} type="email" placeholder='friend email' value={email}/>
            <br></br>
            <button onClick={clickHandler}>Add friend</button>
            <h2>{error}</h2>
    
      </header>
    
        
    )
}
