import NavBar from "./navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/list-beers.css"
import { Link } from "react-router-dom";

function ListBeers() {
  const [listBeers, setListBeers] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL)

      .then((response) => {
        
        setListBeers(response.data);
        console.log(response.data)
      })
      .catch((err) => console.log("Error getting  API...: ", err));
  }, []);

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      
      
      
      {listBeers.map((element) => (
        <div className="card my-3" key={element._id}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={element.image_url} alt={element.name} style={{ maxWidth: "15%", height: "auto" }}  className="card-img" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{element.name}</h3>
            <h4 className="card-subtitle mb-2 text-muted">{element.tagline}</h4>
            <p className="card-text">Created By: {element.contributed_by}</p>
            <Link to={`/beers/${element._id}`} className="btn btn-primary">View Details</Link>
          </div>
        </div>
      </div>
      <hr className="my-0" />
    </div>
      ))}
    </>
  );
}
export default ListBeers;
