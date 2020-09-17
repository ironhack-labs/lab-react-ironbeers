import React, {useState, useEffect} from 'react'
import Layoutapp from '../components/LayoutApp'

function RandomBeer() {
    const [beer, setbeer] = useState(null)

    return beer ? (
        <Layoutapp>
            <div>

            </div>
        </Layoutapp>
    ) : (<h1>Loading</h1>)
}

export default RandomBeer
