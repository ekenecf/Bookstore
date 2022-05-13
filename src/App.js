import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/books';
import NavBar from './components/nav';
import Category from './components/categories';

function RenderApp() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Router>
    </>
  );
}
export default RenderApp;
