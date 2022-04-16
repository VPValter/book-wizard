import { useState } from 'react';
import { Link } from 'react-router-dom';

const Step1 = ({ genres }) => {
  const [step1Selection, setStep1Selection] = useState(null);
  const [step1Completed, setStep1Completed] = useState(false);

  const selectStep1 = (selection) => {
    setStep1Selection(selection.id);
    setStep1Completed(true);
  };

  return (
    <div className='flex-column center'>
      <h2>Step 1 component</h2>
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
      <Link
        to={`/step2/${step1Selection}`}
        className={step1Completed ? 'btn' : 'btn disabled'}
      >
        Next
      </Link>
    </div>
  );
};

export default Step1;
