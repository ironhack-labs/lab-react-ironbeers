import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import beersService from '../../Services/BeerServices'
import NavBar from '../Navbar/Navbar'
import './BeerList2.css'



const BeerList2 = () => {

    const [beers, setBeers] = useState([])
    const [fetching, setFetching] = useState(true)


    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => {
                setBeers(data)
                setFetching(false)
            })

            .catch(err => console.log(err))
    }


    return (
        <>
            <NavBar />
            <h1>Beers</h1>
            {
                fetching ?
                    <h1>Cargando</h1> :
                    beers.map((elm) => {

                        return (
                            <div key={elm._id} className='contentBeer'>
                                <Link to={`/beer/${elm._id}`}><img src={elm.image_url} alt={elm.name} /></Link>
                                <div className='texts'>
                                    <h2>Name: {elm.name}</h2>
                                    <h3>{elm.tagline}</h3>
                                    <p>Created by: {elm.contributed_by}</p>
                                    <hr />
                                </div>
                            </div>
                        )
                    })
            }
        </>
    )
}

export default BeerList2