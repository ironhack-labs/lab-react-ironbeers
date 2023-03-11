import { useEffect, useState } from "react";
import axios from 'axios'

function Beer() {
    const [beer, setBeer] = useState([])
    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((beerData) =>{
            setBeer(beerData.data)
            console.log(beerData.data)
        })
    },[])
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //   };
    return(
        <div>
            {beer.map((beers) => {
                
                return(
                    
                <div key={beers._id}>
                    {/* <Link to="/beers/:beerId"> */}
                        <img src={beers.image_url} alt="beerImg" className="imgBeers" />
                        {/* </Link> */}
                        <h3>{beers.name}</h3>
                        <p>{beers.tagline}</p>
                        <span>Created by: {beers.contributed_by}</span>
                    
                </div>)
            })}

        </div>
    )
}

export default Beer;