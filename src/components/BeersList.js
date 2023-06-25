import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BeersList() {

    const [beersArr, setBeersArr] = useState([]);

    useEffect(() => {
        
        axios.get(`${process.env.REACT_APP_API_URL}/beers`)
            .then(response => {
                setBeersArr(response.data);
            })
            .catch(e => console.log("Error getting beers from API", e))
    }, []);

    return (
        <div>
            <h1>List of all beers</h1>
            {beersArr.map((element) => {
                return (
                    < div key={element._id} >
                        <img src={element.image_url} alt={element.name} />
                        <h4>{element.name}</h4>
                        <h4>{element.tagline}</h4>
                        <h4>Contributed by: {element.contributed_by}</h4>
                        <Link to={`/${element._id}`}>More details</Link>
                    </div>
                )
            })}

        </div >
    )


}

export default BeersList;