import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiBeers from '../util/getAPI'

export const Beers = ({ beersAll }) => {

    const [beers, setBeers] = useState();

    const getBeers = async () => {
        const data = await apiBeers.getAllBeers()
        setBeers(data)
        console.log(data)
    }

    useEffect(() => {
        getBeers()
    }, [])


    return (
        <div className="allbeers">
            <Link to='/' style={{ margin: "300px" }}>
                <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="home" />


                {beers && beers.map((beer) => {
                    return (
                        <table className='table'>
                            <thead />
                            <tbody>
                                <tr key={beer._id}>
                                    <td><img src={beer.image_url} alt='beerImage' style={{ width: "50px", textDecoration: "none", boxShadow: "none" }} /></td>
                                    <td>
                                        <ul>
                                            <li>{beer.name}</li>
                                            <li>{beer.tagline}</li>
                                            <li>{beer.contributed_by}</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    )
                })}
            </Link>

          

        </div>
    )
};