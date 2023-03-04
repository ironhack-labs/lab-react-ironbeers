import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function AllBeers() {
  const [allBeers, setAllBeers] = useState([]);
  const [searchInput, setSearchInput]= useState("")

  const filterBeer = (searchInput) => {
    const filteredBeer = allBeers.filter((cadaCerveza) => {
      if (cadaCerveza.name.includes(searchInput)) {
        return true;
      } else {
        return false;
      }
    });
    setAllBeers(filteredBeer);
  };

  const handleSearch = (event)=>{
    setSearchInput(event.target.value)
    filterBeer(event.target.value)
  }

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response);
      setAllBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h3>Todas las cervezas</h3>

      <label htmlFor="search">Buscar:</label>
      <input
        value={searchInput}
        name="search"
        type="text"
        onChange={handleSearch}
      />
      {allBeers.map((cadaCerveza) => {
        return (
          <div>
          <Header />
            <img src={cadaCerveza.image_url} alt="" width="50px" />
            <h4>{cadaCerveza.name}</h4>
            <h6>{cadaCerveza.tagline}</h6>
            <h6>{cadaCerveza.contributed_by}</h6>
            <Link to={`/beer-details/${cadaCerveza._id}`}>Saber más</Link>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default AllBeers;
