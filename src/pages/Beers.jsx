import { useEffect, useState } from "react";
import axios from 'axios';
import { baseUrl } from "../utils/constants";

function Beers () {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const beersData = await (await axios.get(baseUrl + '/')).data
            setBeers(beersData)
        }
        fetchData()
    }, [])

    return(
        <div>
            <h3> List of beers </h3>
            <br />
            {
                beers.map(beer => (
                    <div key={beer._id} className="card row">
                        <div>
                      <img src={beer.image_url} alt="beer" style={{width: '100px'}}/>
                        </div>

                        <div>
                      <h3>{beer.name}</h3>
                      <h4>{beer.tagline}</h4>
                      <p><strong>Created by: </strong> {beer.contributed_by} </p>
                        </div>
                    </div>
                  ))                
            }
        </div>
    )    
}

export default Beers;