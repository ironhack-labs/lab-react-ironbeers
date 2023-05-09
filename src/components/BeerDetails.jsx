import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import Searchbar from './Searchbar';
import axios from "axios";
import Header from "../components/Header";

export function BeerDetails() {
  const [oneBeer, setBeer] = useState([]);
  const { beerId } = useParams();
  const { showBeer, setShowBeer } = useParams();

  const getBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBeers();
  }, []);
  console.log(oneBeer);

  // const searchBeers = (query) => {
  //   const filteredBeers = oneBeer.filter((oneBeer) =>
  //   oneBeer.name.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setShowBeer(filteredBeers);
  // };

  return (
    <div>
      <Header />
      <br />
      {/* <Searchbar searchBeers={searchBeers}/>
    <div className='List'> */}
      {oneBeer.map((oneBeer) => {
        return (
          <div className="cList">
            {oneBeer && (
              <div className="myCard">
                <p>{oneBeer.name}</p>

                <img
                  className="beerImage"
                  src={oneBeer.image_url}
                  alt={oneBeer.name}
                />
                <div className="info beerDescription">
                  <Link to={`/beer/${oneBeer._id}`}>
                    <h1>{oneBeer.name}</h1>
                    <h4>{oneBeer.tagline}</h4>
                    <h6>Created by: {oneBeer.contributed_by}</h6>
                  </Link>
                </div>
                <hr />
              </div>
            )}
          </div>
        );
      })}
    </div>
    // </div>
  );
}
