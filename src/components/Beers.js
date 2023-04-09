import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

function Beers(props) {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL + "/")
      .then((response) => {
        console.log("response from API", response.data);
        setBeers(response.data);
      })
      .catch((e) => {
        console.log("error getting beer from the API.....", e);
      });
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <SearchBeers beers={beers} setBeers={setBeers} />
    </>
  );
}

function SearchBeers({ beers, setBeers }) {
  const [searchBeers, setSearchBeers] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL)
      .then((response) => {
        setSearchBeers(response.data);
      })
      .catch((e) => {
        console.log("error getting beer from Api....", e);
      });
  }, []);

  const retrieveSearch = (searchValue) => {
    console.log(searchValue);
    axios
      .get(process.env.REACT_APP_APIURL + "/search?q=" + searchValue)
      .then((response) => {
        setSearchBeers(response.data);
      });
  };

  return (
    <>
      <div>
        <input className="mx-auto placeholder:italic placeholder:text-slate-400 block bg-white w-300 justify-center border border-slate-300 rounded-md py-2 pl-9 pr-3 mt-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm " placeholder="Search for a beer..." 
          type="text"
          onChange={(e) => {
            retrieveSearch(e.target.value);
          }}
        />
      </div>
           
      {searchBeers &&
        searchBeers.map((beer) => {
          return (
            <div className="container mx-auto bg-slate-100 shadow-lg rounded-lg drop-shadow-sm hover:drop-shadow-xl pb-4 m-8">
              <div className="p4">
                <div key={beer.id}>
                  <img
                    className="w-32 h-128 rounded-lg shadow-lg mx-auto"
                    src={beer.image_url}
                    alt={beer.name}
                  />
                  <br />
                  <div className="text-gray-700 text-base bg-slate-200 font-semibold rounded-xl mb-4 ml-6 mr-6 font-sans font-semiboild">
                    <div>{beer.name}</div>
                    <br />
                    <div> {beer.tagline}</div>
                    <br />
                    <p> Created by: {beer.contributed_by}</p>
                    <br />
                    <Link
                      className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 mb-8 hover:subpixel-antialiased"
                      key={beer.id}
                      to={`/beers/${beer._id}`}>
                      See Details
                    </Link>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Beers;
