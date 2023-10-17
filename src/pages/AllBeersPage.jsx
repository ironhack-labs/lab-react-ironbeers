import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setBeers(data);
    })
    return()=>{

    }
  }, [])

  return (
    <div>
      {beers.map((beer) => (
        <div className="card mb-3" key={beer._id}>
          <img className="card-img-top" 
          src={beer.image_url} 
          alt="Card image cap" 
          />
          <div className="card-body">
            
            <h5 className="card-title">
              
              <Link to={`/beer-detail/${beer._id}`} >{beer.name}</Link>
              
              </h5>

            <p className="card-tex">{beer.tagline}</p>
          </div>
        </div>
      ))}
    </div>
  )

}

export default AllBeersPage;
