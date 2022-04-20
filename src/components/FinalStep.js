import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FinalStep = ({ setBookData, genres }) => {
  const params = useParams();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bookTitle: '',
    authorName: '',
    isbn: '',
    publisher: '',
    datePublished: '',
    pages: 0,
    format: '',
    edition: '',
    editionLanguage: '',
    description: '',
  });

  const genreId = parseInt(params.genre_id);
  const subGenreId = parseInt(params.subgenre_id);

  if (!genres.length) {
    return null;
  }
  const selectedGenre = genres.find((item) => item.id === genreId);
  if (!selectedGenre) {
    return `There is no genre with id ${genreId}`;
  }
  
  const selectedSubGenre = selectedGenre.subgenres.find((item) => item.id === subGenreId);
  if (!selectedSubGenre) {
    return `There is no subgenre with id ${subGenreId}`;
  }

  const isDescriptionRequired = selectedSubGenre.isDescriptionRequired;

  const {
    bookTitle,
    authorName,
    isbn,
    publisher,
    datePublished,
    pages,
    format,
    edition,
    editionLanguage,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookData({...formData, genreId, subGenreId});
    navigate('/thankyou');
  };

  return (
    <form onSubmit={handleSubmit} className='info-form flex-column'>
      <label htmlFor='bookTitle'>Book title</label>
      <input
        type='text'
        name='bookTitle'
        id='bookTitle'
        value={bookTitle}
        onChange={(e) => onChange(e)}
        placeholder='Book title'
        required
      />
      <label htmlFor='authorName'>Author</label>
      <input
        type='text'
        name='authorName'
        id='authorName'
        value={authorName}
        onChange={(e) => onChange(e)}
        placeholder='Author'
        required
      />
      <label htmlFor='isbn'>ISBN</label>
      <input
        type='text'
        name='isbn'
        id='isbn'
        value={isbn}
        onChange={(e) => onChange(e)}
        placeholder='ISBN'
        required
      />
      <label htmlFor='publisher'>Publisher</label>
      <input
        type='text'
        name='publisher'
        id='publisher'
        value={publisher}
        onChange={(e) => onChange(e)}
        placeholder='Publisher'
      />
      <label htmlFor='datePublished'>Date published</label>
      <input
        type='date'
        name='datePublished'
        id='datePublished'
        value={datePublished}
        onChange={(e) => onChange(e)}
      />
      <label htmlFor='pages'>Number of pages</label>
      <input
        type='number'
        min='1'
        name='pages'
        id='pages'
        value={pages}
        onChange={(e) => onChange(e)}
        placeholder='Number of pages'
      />
      <label htmlFor='format'>Format</label>
      <select
        name='format'
        id='format'
        placeholder='Format'
        value={format}
        onChange={(e) => onChange(e)}
      >
        <option value='hardcover'>Hardcover</option>
        <option value='paperback'>Paperback</option>
        <option value='ebook'>E-book</option>
      </select>
      <label htmlFor='edition'>Edition</label>
      <input
        type='text'
        name='edition'
        id='edition'
        value={edition}
        onChange={(e) => onChange(e)}
        placeholder='Edition'
      />
      <label htmlFor='editionLanguage'>Edition language</label>
      <select
        name='editionLanguage'
        id='editionLanguage'
        value={editionLanguage}
        onChange={(e) => onChange(e)}
        placeholder='Edition language'
      >
        <option value='eng'>English</option>
        <option value='ger'>German</option>
        <option value='ita'>Italian</option>
        <option value='fra'>French</option>
        <option value='esp'>Spanish</option>
      </select>
      <label htmlFor='description'>Description</label>
      <textarea
        type='text'
        name='description'
        id='description'
        value={description}
        onChange={(e) => onChange(e)}
        placeholder='Description'
        required={isDescriptionRequired}
      />
      <div className='flex-row buttons'>
        <span className='btn' onClick={() => navigate(-1)}>
          Back
        </span>
        <button className='btn selected'>Add</button>
      </div>
    </form>
  );
};

export default FinalStep;
