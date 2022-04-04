import React from 'react';
import {Routes, Route} from 'react-router';
import Navbar from './components/navbar/Navbar';
import Home from './views/home/Home';
import AllProducts from './views/allProduct/AllProduct';
import RandomProduct from './views/randomProduct/RandomProduct';
import ProductItem from './views/productItem/ProductItem';
import Form from './views/form/Form'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route 
          path="/"
          element={<Home/>}
        />
        <Route 
          path="/allProducts"
          element={<AllProducts/>}
        />
        <Route 
          path="/random"
          element={<RandomProduct/>}
        />
        <Route 
          path="/products/:id"
          element={<ProductItem/>}
        />
        <Route 
          path="/products/newProduct"
          element={<Form/>}
        />
      </Routes>
    </div>
  );
}

export default App;
