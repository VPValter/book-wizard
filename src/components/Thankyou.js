import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Thankyou = ({ selectedGenre, subGenre, bookData }) => {
  useEffect(() => {
    console.log(selectedGenre);
    console.log(subGenre);
    console.log(bookData);
  }, [bookData, subGenre, selectedGenre]);

  return (
    <div className='flex-column'>
      <p>Book added successfully</p>
      <Link to='/step1' className='btn selected'>Add another book</Link>
    </div>
  );
};

export default Thankyou;
