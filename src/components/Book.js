import React from 'react';

const Book = ({ book, onBookClick }) => {
  return (
    <div className="book" onClick={() => onBookClick(book)}>
      <img src={book.imageLinks.thumbnail} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{Book.description}</p>
    </div>
  );
};

export default Book;
