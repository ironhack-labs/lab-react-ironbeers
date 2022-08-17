import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Beers from "./routes/Beers";
import BeerId from './routes/BeerId';
import RandomBeer from './routes/RandomBeer';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/beers" element={<Beers />} />
    <Route path="/beers/:id" element={<BeerId/>}/>
 <Route path="/random-beer" element={<RandomBeer />} />
    {/* <Route path="new-beer" element={<Invoices />} /> */}
 
  </Routes>
</BrowserRouter>
);
