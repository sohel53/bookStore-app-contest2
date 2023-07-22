import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import SearchBar from './components/SearchBar';
import './styles.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchInitialBooks();
  }, []);

  const fetchInitialBooks = async () => {
    try {
      const response1 = await axios.get(
        'https://www.googleapis.com/books/v1/volumes?q=harry+potter'
      );
      const response2 = await axios.get(
        'https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes'
      );
      const data1 = response1.data.items.map((item) => item.volumeInfo);
      const data2 = response2.data.items.map((item) => item.volumeInfo);
      setBooks([...data1, ...data2]);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const data = response.data.items.map((item) => item.volumeInfo);
      setBooks(data);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseBookDetail = () => {
    setSelectedBook(null);
  };

  return (
    <div className="app">
      <h1>KeazoN Books</h1>
      <SearchBar onSearch={handleSearch} />
      {selectedBook ? (
        <BookDetail book={selectedBook} onClose={handleCloseBookDetail} />
      ) : (
        <BookList books={books} onBookClick={handleBookClick} />
      )}
    </div>
  );
};

export default App;

