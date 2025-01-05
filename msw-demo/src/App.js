import React, { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [newTrip, setNewTrip] = useState({
        firstName: '',
        lastName: ''
      });
  useEffect(() => {
    fetch('https://www.yatra.com/trip')
    .then((res) => {
      console.log(res); // Log the raw response to check the content
      return res.json();
    })
    .then((data) => {
      setUser(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

  }, []);

  const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await fetch('https://www.yatra.com/trip', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTrip),
          });
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          const data = await response.json();
          console.log('Posted successfully:', data);
          
          // Clear the form
          setNewTrip({
            firstName: '',
            lastName: ''
          });
          
        } catch (error) {
          console.error('Error posting data:', error);
        }
      };
    

  return (
    <div className="App">
       <h1>User Data</h1>
       {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Name: {user.firstName} {user.lastName}</p>
        </div>
      ) : (
        <p>Loading...</p> 
      )}

      <h2>Add New Trip</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={newTrip.firstName}
              onChange={(e) => setNewTrip({...newTrip, firstName: e.target.value})}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={newTrip.lastName}
              onChange={(e) => setNewTrip({...newTrip, lastName: e.target.value})}
            />
          </label>
        </div>
        <button type="submit">Add Trip</button>
      </form>
    </div>
  );
}

export default App;
