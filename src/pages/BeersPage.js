import React from 'react';
import Navbar from '../components/Navbar';

import { Link } from "react-router-dom"; 

function BeersPage(props) {
    /* const [beersList, setBeersList] = useState([]);

    // This effect will run only once after the initial render 
    useEffect(() => {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
          console.log("response.data", response.data);
           setBeersList(response.data); 
        });
    }, []); */

  return (
    <div>
        <Navbar/>
        <div className="beersPage container">
            <h1>BeersPage</h1>
            {props.beersList.map((beer) => (
                <div key={beer._id} >
                    <Link to={`/beers/${beer._id}`} className="row list">
                        <div className="col-0 col-sm-0 col-md-1 col-lg-3 col-xl-3"></div>
                        <div className="col-12 col-sm-10 col-md-4 col-lg-2 col-xl-2 list-image">
                            <img src={beer.image_url} alt={beer.name} />
                        </div>
                        <div className="col-12 col-sm-10 col-md-7 col-lg-7 col-xl-7   list-data">
                            <h3>{beer.name}</h3>
                            <h5>{beer.tagline}</h5>
                            <p>Created by: {beer.contributed_by}</p>
                            <p>See details</p>

                            {/* /beers/:beerId */}
                        </div>
                    </Link>
                </div>
            ))}


    
        </div>
    </div>
  );
}

export default BeersPage;
