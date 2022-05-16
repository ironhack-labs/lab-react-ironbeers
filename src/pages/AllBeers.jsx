import Header from "../components/Header";
import BeerCard from "../components/BeerCard";
import { useState, useEffect } from "react";
import axios from "axios";

function AllBeers(props) {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        if (props.beers.length === 0){
            axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((beers) => {
            setBeers(beers.data);
          })
          .catch((err) => console.log(err));

        } else{
            setBeers(props.beers);
        }
        
      }, []);

    

  return (
    <>
      <Header />
      <div>
        {beers.map((beer) => <BeerCard key={beer._id} beer={beer} />)}
      </div>
    </>
  );
}

export default AllBeers;
