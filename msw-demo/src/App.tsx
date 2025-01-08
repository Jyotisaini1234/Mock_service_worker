import  { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the local backend
    fetch('http://localhost:3000/trip-v2/mockData')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Set the data to state
      })
      .catch((error) => {
        setError(error.message); // Handle any errors
      });
  }, []);

  return (
    <div className="App">
      <h1>Mock Data</h1>
      {error && <p>Error: {error}</p>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
