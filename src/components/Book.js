import React from 'react';

const Book = ({ book, onBookClick }) => {
  return (
    <div className="book" onClick={() => onBookClick(book)}>
      <img src={book.thumbnail} alt={book.title} />
      <h3>{book.title}</h3>
    </div>
  );
};

export default Book;
