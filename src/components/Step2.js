import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

const Step2 = ({ genres }) => {
  const params = useParams();
  const selectedGenre = genres.find((item) => item.id === parseInt(params.id));

  const [step2Selection, setStep2Selection] = useState(null);
  const [step2Completed, setStep2Completed] = useState(false);

  const selectStep2 = (selection) => {
    setStep2Selection(selection.id);
    setStep2Completed(true);
  };

  return (
    <div className='flex-column center'>
      <h2>Step 2 component</h2>
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
              ? '/add-new'
              : `/final/${params.id}/${step2Selection}`
          }
          className={step2Completed ? 'btn' : 'btn disabled'}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Step2;
