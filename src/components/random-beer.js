import NavBar from "./navbar";
import {useState, useEffect} from "react";
import axios from "axios"
import  {useParams} from "react-router"

function RandomBeer(){ 
const {beerId}=useParams();
const [random, setRandom] = useState([null]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL+"/random")

      .then((response) => {
        console.log(response.data);
        setRandom(response.data);
       
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
            <img src={random.image_url} alt={random.name} className="beer-image img-fluid mb-3" width={150} />
          </div>
          <div className="col-md-8">
            <h3>{random.name}</h3>
            <p className="mb-2">{random.tagline}</p>
            <hr />
            <p className="mb-1">Attenuation level: {random.attenuation_level}</p>
            <p className="mb-1">First brewed: {random.first_brewed}</p>
            <hr />
            <p>{random.description}</p>
            <p>Created By: {random.contributed_by}</p>
          </div>
        </div>
      </div>
    </>
      );
    
     }

     export default RandomBeer