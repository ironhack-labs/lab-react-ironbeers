import React, { useState, useEffect }  from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Beers = () => {

    const initialState = {
        beers: []
    }

    const [state, setState] = useState(initialState)

    useEffect(() => {
        const getBeers = async () => {
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            setState(state => ({
                beers: response.data
            }))
        } catch(err) {
            console.log("AXIOS ERROR : ", err);
        }
        }
        getBeers()
    }, [])

    const listBeers = state.beers.map(beer => {
        return (
            <li className="list-group-item m-2 border-left-0 border-top-0 border-right-0" key={beer._id}>
                <div className="row d-flex justify-content-around">
                    <img className="mx-2" src={beer.image_url} style={{height:"100px"}} alt="beer" />
                    <div className="text-left" style={{maxWidth:"70%"}}>
                        <Link className="mx-auto" to={`/beers/${beer._id}`}>
                            <h5>{beer.name}</h5>
                        </Link>
                        <p>{beer.tagline}</p>
                        <p><b>Created by:</b> {beer.contributed_by}</p>
                    </div>
                </div> 
            </li>
        )
    })

    // console.log(state.beers)

    return (
        <div className="list-group">
            {listBeers}
        </div>
    )
}

export default Beers
