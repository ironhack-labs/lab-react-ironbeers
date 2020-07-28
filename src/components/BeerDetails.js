import React, { useState, useEffect }  from 'react'
import axios from 'axios'

const BeerDetails = props => {

    const initialState = {
        currentBeer: {}
    }

    const [state, setState] = useState(initialState)

    useEffect(() => {
        const getBeer = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
            setState(state => ({
                currentBeer: response.data
            }))
        } catch(err) {
            console.log("AXIOS ERROR : ", err);
        }
        }
        getBeer()
    }, [])

    console.log(state.currentBeer)

    return (
        <div className="card mx-auto" style={{width:"18rem"}}>
            <img className="card-img-top mx-auto" src={state.currentBeer.image_url} style={{width:"100px"}} alt="Card cap" />
            <div className="card-body">
                <div className="row d-flex justify-content-between my-2">
                    <h5 className="card-title">{state.currentBeer.name}</h5>
                    <h5 className="card-title">{state.currentBeer.attenuation_level}</h5>
                </div>
                <div className="row d-flex justify-content-between my-2">
                    <span className="card-text">{state.currentBeer.tagline}</span>
                    <span className="card-text">{state.currentBeer.first_brewed}</span>
                </div>
                <div className="row d-flex text-left">
                    <p className="card-text">{state.currentBeer.description}</p>
                    <p className="card-text">{state.currentBeer.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}

export default BeerDetails
