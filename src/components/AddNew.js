import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNew = ({ setSubGenre }) => {
  const [isDescriptionRequired, setIsDescriptionRequired] = useState(false);
  const [subgenreName, setSubgenreName] = useState('');
  // mimicking random ID generation:
  const newSubID = 99 * Math.floor(Math.random() * 99);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subFormData = {
      id: newSubID,
      name: subgenreName,
      isDescriptionRequired,
    };
    setSubGenre(subFormData);
    navigate('/final');
  };

  const navigate = useNavigate();

  return (
    <form className='add-new' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Subgenre name'
        required
        onChange={(e) => setSubgenreName(e.target.value)}
      />
      <div className='flex-row checkbox'>
        <input
          type='checkbox'
          name='isRequired'
          id='isRequired'
          onChange={() => {
            setIsDescriptionRequired(!isDescriptionRequired);
          }}
        />
        <label htmlFor='isRequired'>
          Description is required for this subgenre
        </label>
      </div>
      <div className='flex-row buttons'>
        <span className='btn' onClick={() => navigate(-1)}>
          Back
        </span>
        <button className='btn selected'>Next</button>
      </div>
    </form>
  );
};

export default AddNew;
