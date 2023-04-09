import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BeersList() {
  const [beerList, setBeerList] = useState([]);
  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const beersFromDb = await axios.get(process.env.REACT_APP_API_URL);
        setBeerList(beersFromDb.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchBeers();
  }, []);
  return (
    <div className="flex space-y-5 space-x-5 flex-wrap container-sm">
      {beerList.length === 0 ? (
        <p>...loading</p>
      ) : (
        beerList.map((beer) => (
          <div className=" hover:bg-slate-400  w-40  " key={beer._id}>
            <Link to={"/beers/" + beer._id}>
              <img src={beer.image_url} alt={beer.name}></img>
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <p>
                <span>Created By: </span>
                {beer.contributed_by}
              </p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default BeersList;
