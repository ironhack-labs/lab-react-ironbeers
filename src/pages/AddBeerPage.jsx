import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AddBeerPage() {
  const [beers, setBeers] = useState(" ");

  useEffect(() => {
    const iniatliseData = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    iniatliseData();
  }, []);

  return (
    <div>
      <h1>Add Beer</h1>
      {/* Your code for the "Add Beer" page */}
    </div>
  );
}

export default AddBeerPage;
