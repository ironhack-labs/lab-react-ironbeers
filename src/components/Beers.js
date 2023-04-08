import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
        <Link to={"/"}>Home</Link>
    </header>

        {beers && beers.map((beer) => {
            return (
            <div key={beer.id}>
            
            <img src={beer.image_url} alt={beer.name} />
            <br />
            <h1>{beer.name}</h1>
            <br />
            {beer.tagline}
            <br />
            <p> Created by: {beer.contributed_by}</p>
            <br />
            <Link key={beer.id} to={`/beers/${beer._id}`}>See Detials</Link>
            <br />


            </div>
        )

            
        })}
         

      </>  
  )
}
export default Beers;
