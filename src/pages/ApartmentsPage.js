import { useState, useEffect } from "react";
import axios from "axios";
import React , { Component}  from 'react'
function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);
debugger
  // This effect will run only once after the initial render 
  useEffect(() => {
    debugger
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log("response.data", response.data);
        setApartments(response.data);
      });
  }, []);       // <--  [] means: Run the effect only once, after initial render


  return (
    <div>
      <h3>List of apartments</h3>

      {apartments.map((apartment) => (
        <div key={apartment._id} className="card">
          <img src={apartment.img} alt="apartment" />
          <h3>{apartment.name}</h3>
          <p>Price: {apartment.pricePerDay}</p>
        </div>
      ))}
    </div>
  );
}

export default ApartmentsPage;
