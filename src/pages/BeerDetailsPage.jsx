import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function BeerDetailsPage() { 
const { beerId } = useParams();
const [beer, setBeer] = useState(null);
console.log('beerId -->', beerId);

useEffect(() => {
    axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response) => {
            setBeer(response.data);
        });
}, [beerId]);

return (
    <div>
        { }
        {beer &&
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={beer.image_url} className="card-img-top" alt="beer pic" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>}
    </div>
);};


export default BeerDetailsPage;
