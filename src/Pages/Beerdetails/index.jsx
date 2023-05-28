import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import { useParams } from "react-router-dom";

function Beerdetails() {
  const { beerId } = useParams();
  const [thisBeer, setThisBeer] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`).then((response) => {
      setThisBeer(response.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      {!thisBeer ? (
        <p>Loading...</p>
      ) : (
        <div key={thisBeer._id}>
          <h3>Name: {thisBeer.name}</h3>
          <p>Tagline: {thisBeer.tagline}</p>
          <img src={thisBeer.image_url} alt="" />
          <p>Contributed By: {thisBeer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default Beerdetails;