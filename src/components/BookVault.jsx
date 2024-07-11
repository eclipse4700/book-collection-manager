import React, { useState, useEffect } from "react";
import "../index.css";

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
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <img src={book.image} alt={book.title} className="book-image" />
                        <div className="book-details">
                            <h2>{book.title}</h2>
                            <p>{book.author}</p>
                            <p>{book.notes}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookVault;




