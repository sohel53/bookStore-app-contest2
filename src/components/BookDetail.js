import React from 'react';

const BookDetail = ({ book, onClose }) => {
  return (
    <div className="book-detail">
      <div className="close-btn" onClick={onClose}>
        Close
      </div>
      <img src={book.thumbnail} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <a href={book.previewLink} target="_blank" rel="noopener noreferrer">
        Read Now
      </a>
      <a href={book.infoLink} target="_blank" rel="noopener noreferrer">
        More Info
      </a>
    </div>
  );
};

export default BookDetail;
