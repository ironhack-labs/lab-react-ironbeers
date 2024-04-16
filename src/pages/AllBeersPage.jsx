import { useEffect, useState } from "react";
import BeerCard from "../components/BeerCard";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import beerLoading from "../assets/beerLoading.gif"


function AllBeersPage() {

  const [beers, setBeers] = useState([]);
  const [searchBeer, setSearchBeer] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("there is an error", error)
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchBeer}`)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => console.error("There was an error", error))
  }, [searchBeer])

  const handleSearchBeer = (event) => {
    setSearchBeer(event.target.value.toLowerCase())
  }

  return (
    <>
      <main>
        <section className="text-center">
          <SearchBar onSearchBeer={handleSearchBeer}/>
        </section>

        <section className="m-5 flex flex-wrap justify-center">
          {loading ? (
            <div className="flex flex-col items-center">
              <img src={beerLoading} alt="Beer loading"/>
              <h3>LOADING...</h3>
            </div>
          ) : (beers.map((beer) => (
            <div key={beer._id} className="m-3">
              <BeerCard {...beer} />
            </div>
          ))
        )}  
        </section>
      </main>
    </>
  )
}

export default AllBeersPage;
