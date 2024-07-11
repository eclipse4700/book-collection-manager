import React, { useState, useEffect } from "react";

function BookVault() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/books')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <h1>Book Vault</h1>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <img src={book.image} alt={book.title} className="book-image" />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookVault;
