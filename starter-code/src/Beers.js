import axios from 'axios';
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'; 

export default function Beers() {
  const [beers,setBeers] = useState([]);
   axios.get('https://ih-beers-api.herokuapp.com/beers').then(response=>setBeers(response.data)); // fetching data
    return (
    
    <div className="container">
       {beers.map(beer=>{ //rending html for the beer list
        return (
            <div>
              <div className="row">
                <div className="col-2">
                  <img className="beer-image" src={beer.image_url}/>
                    </div>

                  <div className="col-8">
              <Link to={`/beer/${beer._id}`}><div>{beer.name}</div></Link>
            <div className="description">{beer.description}</div>
          </div></div>
      <hr/>
    </div>
)
})}   
     </div>  
  );
}
