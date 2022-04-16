import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Indicator from './components/Indicator';
import Step1 from './components/Step1';
import Step2 from './components/Step2';

function App() {
  const getGenres = () => {
    fetch('genres.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((genres) => {
        setGenres(genres);
      });
  };

  useEffect(() => {
    getGenres();
  }, []);

  const [genres, setGenres] = useState({});

  return (
    <BrowserRouter>
      <div className='App'>
        <Indicator />
        <Routes>
          <Route path='/' element={<Navigate replace to='/step1' />} />
          <Route path='/step1' element={<Step1 />} />
          <Route path='/step2' element={<Step2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
