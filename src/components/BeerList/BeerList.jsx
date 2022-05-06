import { useEffect, useState } from 'react'
import './BeerList.css'
import axios from 'axios'

const BeerList = () => {

    const [beers, setBeers] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        fecthBeers()
    }, [])

    const fecthBeers = () => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(({ data }) => {
                setBeers(data)
                setFetching(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h1>Beers</h1>
            {
                fetching ?
                    <h1>Cargando</h1> :
                    beers.map((elm) => {

                        return (
                            <div key={elm._id} className='contentBeer'>
                                <img src={elm.image_url} />
                                <div className='texts'>
                                    <p>{elm.name}</p>
                                    <p>{elm.tagline}</p>
                                    <p>{elm.contributed_by}</p>
                                </div>
                            </div>
                        )
                    })
            }
        </>
    )
}

export default BeerList


//fetching ? <h1>Cargando</h1> : beers.map((apt) => <ApartmentCard key={apt._id} {...apt} />)
