import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu'
import axios from 'axios';







function App() {
  const serverUrl = 'http://localhost:9000';

  axios.post(`${serverUrl}/api/login`, {username: "Bloom", password: "Tech"})
  .then((response) => {
    // Handle the successful response here
    console.log('Response:', response.data);
  })
  .catch((error) => {
    // Handle errors here
    console.error('Error:', error);
  });




  return (
 
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/login" element={<Login/>} />
       
      </Routes>
    
          </div>
  );
}

export default App;
