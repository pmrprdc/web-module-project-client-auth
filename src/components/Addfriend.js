import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import { axiosWithAuth } from '../util/axiosWithAuth';

const axiosIntance = axiosWithAuth();

export default function Addfriend () {
    const [error, setError] = useState ("");
    const  [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const serverUrl = 'http://localhost:9000'


    const clickHandler = (e) => {
            console.log('add friend clicked')
            if(name.length>3 && email.length>3) {
                axiosIntance.post(`api/friends`, {id: 43,name: name, email: email}).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
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
