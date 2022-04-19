import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Indicator from './components/Indicator';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import FinalStep from './components/FinalStep';
import AddNew from './components/AddNew';
import Thankyou from './components/Thankyou';

function App() {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState({});
  const [subGenre, setSubGenre] = useState({});
  const [bookData, setBookData] = useState({});

  const getGenres = () => {
    fetch('/genres.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.genres) {
          setGenres(data.genres);
        }
      });
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        <Indicator />
        <Routes>
          <Route path='/' element={<Navigate replace to='/step1' />} />
          <Route path='/step1' element={<Step1 genres={genres} />} />
          <Route
            path='/step2/:id'
            element={
              <Step2
                genres={genres}
                setSelectedGenre={setSelectedGenre}
                setSubGenre={setSubGenre}
              />
            }
          />
          <Route
            path='/add-new'
            element={<AddNew setSubGenre={setSubGenre} />}
          />
          <Route
            path='/final'
            element={<FinalStep setBookData={setBookData} />}
          />
          <Route
            path='/thankyou'
            element={
              <Thankyou
                selectedGenre={selectedGenre}
                subGenre={subGenre}
                bookData={bookData}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
