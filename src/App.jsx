import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import BookVault from './components/BookVault';
import NewBook from './components/Newbook';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/vault">Book Vault</Link>
          <Link to="/new">New Book</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vault" element={<BookVault />} />
          <Route path="/new" element={<NewBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
