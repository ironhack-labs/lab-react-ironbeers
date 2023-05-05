import { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
function SingleBeer() {
  const [singleBeer, setSingleBeer] = useState();
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setSingleBeer(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  if (!singleBeer) {
    return <h2>LOADING.....</h2>;
  } else {
    return (
      <div>
        <Header />
        <Navbar />

        <div className="singleBear">
          <img src={singleBeer.image_url} alt="" />
          <h3>Name: {singleBeer.name}</h3>
          <h3>Tagline:{singleBeer.tagline}</h3>
          <h3>First Brewed :{singleBeer.first_brewed}</h3>
          <h3>attenuation_level :{singleBeer.attenuation_level}</h3>
          <h3>description :{singleBeer.description}</h3>
          <h3>contributed_by :{singleBeer.contributed_by}</h3>
        </div>
      </div>
    );
  }
}

export default SingleBeer;
