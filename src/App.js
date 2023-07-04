import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import ItemDetail from './Components/ItemDetail';
import './App.css';


function App() {
  return (
    <Routes>
      
        <Route exact path="/" element={<Home/>} />
        <Route path="/item/:id" element={<ItemDetail/>} />
      
    </Routes>
  );
}

export default App;
