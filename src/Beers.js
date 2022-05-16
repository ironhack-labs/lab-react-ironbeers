import axios from "axios";
import { useEffect, useState } from "react";

function Beers() {

    const [ beer, setBeer] = useState([]);


        useEffect( () => {
            axios.get('https://ih-beers-api2.herokuapp.com/beers')
                .then( response => {
                    console.log(response.data)
                })
                .catch( e => console.log('error on get route beers', e))
        },[])


    return (

        <section>
        
        <h1>BEERS</h1>
        
        {beer.map( (element) => {
            return(
                <div>
                    <img src={element.image_url} />
                    <h3>{element.name}</h3>
                    <h3>{element.tagline}</h3>
                    <h3>{element.contributed_by}</h3>
                </div>
            )
        })}

        </section>

    )
}

export default Beers;