import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function AddBeerPage() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default AddBeerPage;
