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
    <div className="p-5 d-flex flex-wrap gap-5">
      {beers.map((beer) => (
        <div className="card mb-3 align-items-center pt-5" style={{width:"300px"}} key={beer._id}>
         
          <img className="card-img-top mb-3" 
          src={beer.image_url} 
          alt="Card cap" 
          style={{maxWidth: "100px", heigth:"auto"}}
          
          />
          
          
          <div className="card-body">
            <h5 className="card-title"> 
              <Link to={`/beer-detail/${beer._id}`} >{beer.name}</Link>
            </h5>
            <p className="card-text">{beer.tagline}</p>
            <p className="card-text">
              <small className="text-muted">{beer.contributed_by}</small>
            </p>
          </div>  
          

             
        </div>    
       
      ))}
    </div>
  )

}

export default AllBeersPage;
