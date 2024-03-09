import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllBeersPage from './AllBeersPage';
import BeerDetailsPage from './BeerDetailsPage';


export default function BeerHomePage() {
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<AllBeersPage />}/>
            <Route exact path="/:beerId" element={<BeerDetailsPage />}/>
        </Routes>
    </div>
  )
}
