import NavBar from "./navbar";
import {useState, useEffect} from "react";
import axios from "axios"
import  {useParams} from "react-router"

function SingleBeer(){ 
const {beerId}=useParams();
const [details, setDetails] = useState([null]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL+"/"+ beerId )

      .then((response) => {
        console.log(response.data);
        setDetails(response.data);
       
      })
      .catch((err) => console.log("Error getting  beer details...: ", err));
  }, [beerId]);

    return (
      <>
      <nav >
        <NavBar />
      </nav>
      <div className="container my-5">
        
        <div className="row">
          <div className="col-md-4">
            <img src={details.image_url} alt={details.name} className="beer-image img-fluid mb-3" width={150} />
          </div>
          <div className="col-md-8">
            <h3>{details.name}</h3>
            <p className="mb-2">{details.tagline}</p>
            <hr />
            <p className="mb-1">Attenuation level: {details.attenuation_level}</p>
            <p className="mb-1">First brewed: {details.first_brewed}</p>
            <hr />
            <p>{details.description}</p>
            <p>Created By: {details.contributed_by}</p>
          </div>
        </div>
      </div>
    </>
      );
    
     }

    

     export default SingleBeer