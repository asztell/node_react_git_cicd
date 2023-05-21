import React, {useEffect, useState} from 'react';
import './App.css'

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(
      data => {
        console.log('useEffect data', data)
        setData(data)
      }
    );
  }, []);

  return (
    <ul>
      {data.users && data.users.map(user => {
        return <li key={user}>{user}</li>
      })}
    </ul>
  );
}

export default App;