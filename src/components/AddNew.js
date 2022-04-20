import { useState } from 'react';
import { useNavigate, Navigate, useParams } from 'react-router-dom';

const AddNew = ({ genres, setGenres }) => {
  const navigate = useNavigate();
  const params = useParams();
  const genreId = parseInt(params.genre_id);

  const [isDescriptionRequired, setIsDescriptionRequired] = useState(false);
  const [subgenreName, setSubgenreName] = useState('');

  const selectedGenre = genres.find((item) => item.id === genreId);
  if (!selectedGenre) {
    return <Navigate replace to='/step1' />;
  }

  // mimicking random ID generation:
  const newSubID = 99 * Math.floor(Math.random() * 99);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subFormData = {
      id: newSubID,
      name: subgenreName,
      isDescriptionRequired,
    };
    setGenres(
      genres.map((item) =>
        item.id === parseInt(params.genre_id)
          ? { ...item, subgenres: [...item.subgenres, subFormData] }
          : item
      )
    );

    navigate(`/final/${params.genre_id}/${newSubID}`);
  };

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
