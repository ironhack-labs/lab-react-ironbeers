import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import BeerDetail from "../components/BeerDetail";
import axios from "axios";

function SingleBeer(props) {
  const { beerId } = useParams();
  console.log(beerId);
  const [beer, setBeer] = useState({});

  useEffect(() => {
    if (props.beers.length === 0) {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((beers) => {
          const findBeer = beers.data.find((beer) => beer._id === beerId);
          if (findBeer) {
            setBeer(findBeer);
          }
        })
        .catch((err) => console.log(err));
    } else {
        const findBeer = props.beers.find((beer) => beer._id === beerId);
  
        if (findBeer) {
          setBeer(findBeer);
        }
    }
  }, []);

  useEffect(() => {
    console.log(props);
  }, [beer]);

  return (
    <>
      <Header />
      <BeerDetail beer={beer} />
    </>
  );
}

export default SingleBeer;
