import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Beer() {
    const style = {width: '80px', alignSelf: "center", marginTop: '20px' }

    const [beer, setBeer] = React.useState([])

    const params = useParams()

    React.useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`).then((res)=> setBeer(res.data)) 
    }, [])
    console.log("beer details", beer)
    
    return (
        <div>
            <h1>Beer's Details</h1>
            <div>
                <img src={beer.image_url} alt={beer.name} style={style}/>
                <div>
                    <h3>{beer.name}</h3>
                    <h5>{beer.tagline}</h5>
                    <p>{beer.first_brewed}</p>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}
export default Beer;

// const style = {width: '80px', alignSelf: "center", marginTop: '20px' }
// const [beers, setBeers] = React.useState([])

// //axios siempre devuelve un objeto {data} con la información
// React.useEffect(()=> {
//     axios.get("https://ih-beers-api2.herokuapp.com/beers").then((res)=>setBeers(res.data))
// }, [])
// console.log("beers", beers)
