import axios from 'axios';
import React from 'react';

function RandomBeer() {
    const style = {width: '80px', alignSelf: "center", marginTop: '20px' }

    const [random, setRandom] = React.useState([])

    React.useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then((res)=>setRandom(res.data))
    }, [])
    console.log('random', random)

    return (
        <div>
            <h1>Beer's Details</h1>
            <div>
                <img src={random.image_url} alt={random.name} style={style}/>
                <div>
                    <h3>{random.name}</h3>
                    <h5>{random.tagline}</h5>
                    <p>{random.first_brewed}</p>
                    <p>{random.attenuation_level}</p>
                    <p>{random.description}</p>
                    <p>{random.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}
export default RandomBeer;
