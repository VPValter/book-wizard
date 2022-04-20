import { Link, useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';

const Step2 = ({ genres }) => {
  const params = useParams();
  const selectedGenre = genres.find(
    (item) => item.id === parseInt(params.genre_id)
  );

  const [step2Selection, setStep2Selection] = useState(null);

  if (genres.length && !selectedGenre) {
    return <Navigate replace to='/step1' />
  }

  const selectStep2 = (selection) => {
    setStep2Selection(selection.id);
  };

  return (
    <div className='flex-column center'>
      <h3>Add new book - Step 2</h3>
      {selectedGenre && (
        <p>
          Selected genre: {selectedGenre.name}, id: {selectedGenre.id}
        </p>
      )}

      <div className='genres flex-row'>
        {selectedGenre &&
          selectedGenre.subgenres.map((item) => (
            <span
              key={item.id}
              id={item.id}
              className={item.id === step2Selection ? 'btn selected' : 'btn'}
              onClick={() => selectStep2(item)}
            >
              {item.name}
            </span>
          ))}
        <span
          id='addNew'
          className={step2Selection === 'addNew' ? 'btn selected' : 'btn'}
          onClick={() => selectStep2({ id: 'addNew' })}
        >
          Add new
        </span>
      </div>

      <div className='flex-row'>
        <Link to='/step1' className='btn'>
          Back
        </Link>
        <Link
          to={
            step2Selection === 'addNew'
              ? `/add-new/${params.genre_id}`
              : `/final/${params.genre_id}/${step2Selection}`
          }
          className={step2Selection ? 'btn' : 'btn disabled'}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Step2;
