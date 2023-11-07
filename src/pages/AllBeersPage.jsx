const API_URL="https://ih-beers-api2.herokuapp.com/beers";
import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "../App.css";
import { Card, Divider} from "antd";

function AllBeersPage() {
    const [beers, setBeers] = useState([]);

    /* UseEffect with an empty array will creade side-effects when the component is rendered initially */
    useEffect(() => {
      axios.get(`${API_URL}`).then((response)=>{
        setBeers(response.data);
        console.log(beers)
      })
      .catch(error=>console.log(error))
    }, [])

    return(
        <Card>
            {beers.map(beer=>{
                return(
                    <Card key={beer._id}>
                        <Link to={`/beers/${beer._id}`}>
                            <div>
                                <Divider>{beer.name}</Divider>
                                <Divider>{beer.tagline}</Divider>
                                <Divider>{beer.contributed_by}</Divider>
                            </div>
                            <Divider><img id="beer-img" src={beer.image_url}/></Divider>
                        </Link>
                    </Card>
                )
            })}
        </Card>
    )
}

export default AllBeersPage;
