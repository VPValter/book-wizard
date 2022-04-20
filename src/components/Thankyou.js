import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Thankyou = ({ bookData }) => {

  useEffect(() => {
    console.log(bookData);
  }, [bookData]);

  if (!bookData || !Object.keys(bookData).length) {
    return <Navigate replace to='/step1' />
  }

  return (
    <div className='flex-column'>
      <strong>Book added successfully</strong>

      <div className='information-entered'>
        <p>Information entered:</p>
        {bookData.bookTitle && <p>Title: {bookData.bookTitle}</p>}
        {bookData.authorName && <p>Author: {bookData.authorName}</p>}
        {bookData.isbn && <p>ISBN: {bookData.isbn}</p>}
        {bookData.publisher && <p>Publisher: {bookData.publisher}</p>}
        {bookData.datePublished && <p>Date Published: {bookData.datePublished}</p>}
        {bookData.pages && <p>Number of pages: {bookData.pages}</p>}
        {bookData.format && <p>Format: {bookData.format}</p>}
        {bookData.edition && <p>Edition: {bookData.edition}</p>}
        {bookData.editionLanguage && <p>Edition Language: {bookData.editionLanguage}</p>}
        {bookData.description && <p>Description: {bookData.description}</p>}
      </div>

      <Link to='/step1' className='btn selected'>Add another book</Link>
    </div>
  );
};

export default Thankyou;
