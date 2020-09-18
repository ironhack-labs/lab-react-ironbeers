import React, {useState, useEffect} from 'react'
import Layoutapp from '../components/LayoutApp'

function RandomBeer() {
    const [beer, setbeer] = useState(null)

    return beer ? (
        <Layoutapp>
            <div>
                <img src="" alt=""/>
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <h3>{beer.firstBrewed}</h3>
                <h3>{beer.description}</h3>
                <h3>{beer.contibuted_by}</h3>
            </div>
        </Layoutapp>
    ) : (<h1>Loading</h1>)
}

export default RandomBeer
