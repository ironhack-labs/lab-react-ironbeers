import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink} from "react-router-dom";

function AllBeers() {
  const [beersArr, setBeersArr] = useState(null);
  const [search, setSearch] = useState("");
  const baseURL = "https://ih-beers-api2.herokuapp.com/beers";

  let searchResult = []
  if(!search) {
    searchResult = beersArr
  } else {
    searchResult = beersArr.filter((input) => input.name.toLowerCase().includes(search.toLocaleLowerCase()))
  }
  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }



  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setBeersArr(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    axios
    .get(baseURL + "/search?q={query}")
  })


  return (
    <>
      <NavLink to="/">Home</NavLink>
      <h1>This is the list of all our beers</h1>

      <input value={search} onChange={searcher} type="text" placeholder="search beer"/>

      {beersArr === null
        ? "loading..."
        : searchResult.map((beerDetails) => {
            return (
              <div className="beer" >
                <img src={beerDetails.image_url} alt=""></img>
                <h3>{beerDetails.name}</h3>
                <p>{beerDetails.tagline}</p>
                <p>Contributed by: {beerDetails.contributed_by}</p>
                <Link to={'/beers/' + beerDetails._id}>Know more</Link>

              </div>
            );
          })}
    </>
  );
}
export default AllBeers;
