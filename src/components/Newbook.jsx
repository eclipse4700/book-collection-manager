import React, { useState } from 'react';

function NewBook() {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    author: '',
    notes: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newBook = { ...formData };
    fetch('http://localhost:4000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then(response => response.json())
      .then(data => {
        console.log('New book added:', data);
        setFormData({
          image: '',
          title: '',
          author: '',
          notes: ''
        });
      })
      .catch(error => console.error('Error adding book:', error));
  }

  return (
    <div>
      <h1>New Book</h1>
      <form onSubmit={handleSubmit} className='formbox'>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </label>
        <label>
          Notes:
          <input
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default NewBook;

