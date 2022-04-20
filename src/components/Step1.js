import { useState } from 'react';
import { Link } from 'react-router-dom';

const Step1 = ({ genres }) => {
  const [step1Selection, setStep1Selection] = useState(null);

  const selectStep1 = (selection) => {
    setStep1Selection(selection.id);
  };

  return (
    <div className='flex-column center'>
      <h3>Add new book - Step 1</h3>
      <div className='genres flex-row'>
        {genres &&
          genres.map((item) => (
            <span
              key={item.id}
              id={item.id}
              className={item.id === step1Selection ? 'btn selected' : 'btn'}
              onClick={() => selectStep1(item)}
            >
              {item.name}
            </span>
          ))}
      </div>
      {step1Selection ? (
        <Link to={`/step2/${step1Selection}`} className='btn'>
          Next
        </Link>
      ) : (
        <span className='btn disabled'>Next</span>
      )}
    </div>
  );
};

export default Step1;
