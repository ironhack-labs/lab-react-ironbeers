import React, { useEffect, useState } from 'react';
import Header from './Header';



const RandomBeer = (props) => {

    const [beer, setBeer] = useState({})

    useEffect(() => {
        const getData = async () => {
            const data = await fetch(`https://api.punkapi.com/v2/beers/random`)
            const beerJSON = await data.json()
            setBeer(beerJSON[0])
        }
        getData()
    }, [props])


    return (

        <div>
            <Header />
            <div className="beers">

                <div >
                    <img src={beer.image_url} alt="" style={{ height: 180, marginTop: "2em" }} />

                    <div>
                        <div>
                            <h2>{beer.name}</h2> <span>{beer.first_brewed}</span>
                        </div>
                        <div>
                            <h3>{beer.tagline}</h3> <span>{beer.attenuation_level}</span>
                        </div>
                        <p>{beer.description}</p>
                        <p>{beer.brewers_tips}</p>
                        <h6><b>Created by:</b> {beer.contributed_by}</h6>
                    </div>
                    <hr></hr>
                </div>
            </div>
        </div>
    )
}

export default RandomBeer;