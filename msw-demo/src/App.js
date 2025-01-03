import React, { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
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

  return (
    <div className="App">
      <h1>User Data</h1>
      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Name: {user.firstName} {user.lastName}</p>
        </div>
      ) : (
        <p>Loading...</p> // Show "Loading..." until the data is fetched
      )}
    </div>
  );
}

export default App;