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

      {beers &&
        beers.map((beer) => {
          return (
            <div className="container mx-auto bg-slate-100  shadow-lg rounded-lg drop-shadow-sm hover:drop-shadow-xl pb-4 m-8">
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
                      See Detials
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
