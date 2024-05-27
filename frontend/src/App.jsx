import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import EditBook from './pages/EditBooks';
import ShowBook from './pages/ShowBooks';
import './index.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/show/:id' element={<ShowBook />} />
    </Routes>
  );
};

export default App;
