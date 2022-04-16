import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const getGenres = () => {
    fetch('genres.json', {
      headers:  {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => {
      return res.json();
    }).then(genres => {
      setGenres(genres);
    });
  }

  useEffect(() => {
    getGenres();
  }, []);

  const [genres, setGenres] = useState({});

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
