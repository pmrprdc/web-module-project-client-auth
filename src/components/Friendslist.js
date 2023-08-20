import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FriendsList = () => {


  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:9000'; // Replace with your API URL

    // Make a GET request to retrieve the friends list
    axios.get(`${apiUrl}/api/friends`, {
      headers: {
        Authorization: localStorage.getItem('token') // Replace with your actual token
      }
    })
      .then(response => {
        setFriends(response.data); // Update the state with the retrieved data
        console.log(friends)
      })
      .catch(error => {
        console.error('Error retrieving friends list:', error.message);
      });
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
