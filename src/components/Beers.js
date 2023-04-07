import NavBar from "./NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import loadingImage from "../assets/loading.gif";
import { Link } from "react-router-dom";

function Beers() {
  const [beersArr, setBeersArr] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL)
      .then((responseFromApi) => {
        setBeersArr(responseFromApi.data);
      })
      .catch((error) => console.log("Error getting data from API...: ", error));
  }, []);
  console.log(beersArr);
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <h1>List of beers</h1>
      {beersArr ? (
        beersArr.map((beer) => {
          return (
            <Link to={`/beers/${beer._id}`}>
              <div className="card">
                {beer.image_url ? <img src={beer.image_url} alt="" /> : <img src={loadingImage} alt={"Loading"} />}
                <h1>{beer.name}</h1>
                <p>{beer.tagline}</p>
                <p>
                  By <i>{beer.contributed_by}</i>
                </p>
              </div>
            </Link>
          );
        })
      ) : (
        <img src={loadingImage} alt={"Loading"} />
      )}
    </>
  );
}
export default Beers;
