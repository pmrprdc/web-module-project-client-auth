import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../util/axiosWithAuth';
const FriendsList = () => {


  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:9000'; // Replace with your API URL
    axiosWithAuth().get('/api/friends').then(res=>{
        setFriends(res.data)
    }).catch(error => {
        console.error('Error retrieving friends list:', error.message);
      });
    // Make a GET request to retrieve the friends list
   
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <h1>Friends List</h1>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
