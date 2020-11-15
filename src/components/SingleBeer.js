import React, { useState } from 'react';
import Header from './Header';

const SingleBeer = (props) => {

    const [beer, setBeer] = useState({})
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        const getData = async () => {
            const data = await fetch(`https://api.punkapi.com/v2/beers/${props.match.params.beerId}`)
            const beerJSON = await data.json()
            setBeer(beerJSON[0])
        }
        getData()
        setLoading(false)
    }, [props])


    return (
        <div>
            <Header />
            {loading ? <div>Loading...</div>
                :
                <div key={beer.id} className="SingleBeer">
                    <div style={{ marginTop: "2em" }} >
                        <img src={beer.image_url} style={{ maxWidth: "40px" }} alt={beer.name} />
                        <div>
                            <h2>{beer.name}</h2>
                            <span>{beer.attenuation_level}</span>
                        </div>
                        <div>
                            <h3>{beer.tagline}</h3>
                            <span>{beer.first_brewed}</span>
                        </div>
                        <p>{beer.description}</p>
                        <span>{beer.contributed_by}</span>
                    </div>
                </div>}
        </div>
    );

}




export default SingleBeer;