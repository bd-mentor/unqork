import React, { useEffect, useState } from 'react';
    import axios from 'axios';

    function App() {
      const [message, setMessage] = useState('Loading...');

      useEffect(() => {
        axios.get('http://localhost:4000/api/message')
          .then((response) => {
            setMessage(response.data.message);
          })
          .catch((error) => {
            console.error('Error fetching message from backend:', error);
            setMessage('Error loading message');
          });
      }, []);

      return (
        <div style={{ margin: '20px' }}>
          <h1>Frontend React</h1>
          <p>Message received from Backend:</p>
          <p><strong>{message}</strong></p>
        </div>
      );
    }

    export default App;
