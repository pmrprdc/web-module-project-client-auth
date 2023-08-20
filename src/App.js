import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu'
import axios from 'axios';
import Friends from './components/Friendslist'






function App() {

  



  const serverUrl = 'http://localhost:9000';
  


  useEffect(()=> {
    axios.post(`${serverUrl}/api/login`, {username: "Bloom", password: "Tech"})
    .then((response) => {
      // Handle the successful response here
     
      const { token } = response.data;
      localStorage.setItem('token', token);
      

    })
    .catch((error) => {
      // Handle errors here
      console.error('Error:', error);
    });
  
  

  },[])






  return (
 
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/friends" element={<Friends/>} />

      </Routes>
    
          </div>
  );
}

export default App;
