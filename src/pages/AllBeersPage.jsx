import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function AllBeersPage() {
    const [beers, setBeers] = useState([]);
    useEffect(()=>{
      axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response)=>{
        
          setBeers(response.data)
      },[])
    })
   
        return (
          <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
            {beers.length === 0 && <h2>Loading...</h2>}
            {beers &&
              beers.map((beer) => {
                return (

                <div className="col" key={beer._id}>
                  <div className="card" style={{height:"700px"}}>
                    <img src={beer.image_url} className="card-img-top" alt="..." />
                    
                    <div className="card-body">
                   
                      <h3 className="card-title">{beer.name}</h3>
                    
                      <h5>{beer.tagline}</h5>
                      <p className="card-text">
                    Created by: {beer.contributed_by}
                      </p>
                      <Link to={`/beers/${beer._id}`}>
                      <button type="button" className="btn btn-info">Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
                )
              })}
          </div>
        );
    
}

export default AllBeersPage;
