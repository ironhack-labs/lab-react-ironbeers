import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from 'axios'
import { Link } from "react-router-dom";

const Beers = () =>{

    const [ beers, setBeers ] = useState([]);

    const getAllBeers = async () => {
        try {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
            console.log(response.data)
            setBeers(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllBeers();
    }, [])


    return(
        <div>
            <Header/>
            {
                beers.map(beer =>(
                    <Link to={`/beers/${beer._id}`} key={beer._id} className="beers">
                        <div className="beers-image">
                            <img src={beer.image_url} alt={beer.name} style={{width: "80px", height: "180px"}}/>
                        </div>
                        <div className="beers-info">
                            <h2>{beer.name}</h2>
                            <h3>{beer.tagline}</h3>
                            <p>Contributed by {beer.contributed_by.replace(/<[^>]+>/g, '')}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Beers;