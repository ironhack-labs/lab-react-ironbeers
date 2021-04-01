import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBeers } from '../../services/BaseService'

const Beers = () => {
    const [beers, setbeers] = useState([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
        setLoading(true)
        
        getBeers(query).then(res => {
            setbeers(res)
            setLoading(false)
        })
    }, [query])

    const handleQuery = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div className="container Beers mt-3">

            <input 
                className="form-control form-control-lg" 
                type="text" 
                placeholder="Search for beers" 
                value={query}
                onChange={handleQuery}
            />

            { loading
                ?   <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
                        <div className="col mb-3">
                            <div className="beer_skeleton"></div>
                        </div>
                        <div className="col mb-3">
                            <div className="beer_skeleton"></div>
                        </div>
                        <div className="col mb-3">
                            <div className="beer_skeleton"></div>
                        </div>
                        <div className="col mb-3">
                            <div className="beer_skeleton"></div>
                        </div>
                    </div>

                :   <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
                        {  
                            beers.map(beer => {
                                return ( 
                                    <div className="col mb-3" key={beer._id}>
                                        <Link to={`/beer/${beer._id}`} className="card h-100 p-1 p-md-3">

                                        <div className="row g-0">
                                            <div className="col-3 text-center">
                                                <img src={beer.image_url} className="p-4" style={{ maxHeight: '175px' }} alt="..." />
                                            </div>
                                            <div className="col-9">
                                                <div className="card-body">
                                                    <h5 className="card-title">{beer.name}</h5>
                                                    <p className="card-text">{ beer.description.substr(0, 150) } { beer.description.length >= 150 && '...' }</p>
                                                    <small className="text-muted">Created by: { beer.contributed_by }</small>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
            }

        </div>
    )
}

export default Beers
