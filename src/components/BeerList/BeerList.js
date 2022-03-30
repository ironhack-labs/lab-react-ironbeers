import './BeerList.css'
import React, { useEffect, useState } from 'react';
import { Card, Input } from 'semantic-ui-react'
import Loading from '../Loading/Loading';
import axios from 'axios';
import { Link } from 'react-router-dom'




const BeersList = (props) => {

    const { beers } = props
   
    const [loading, setLoading] = useState(true)
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    useEffect(() => {
        if(beers) {
            setLoading(false)
        }
    }, [beers])
  

    return (
        <>
        <div>
            
        <div style={{ padding: 20 }}>
            <Input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
            <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                
                {searchInput.length > 1 ? (
                    filteredResults.map((beer) => {
                        return (
                            <div className="wrapper">
                            <div key={beer._id}>
                                <div className='product-img'>
                                <img src={beer.image_url} width="150" height="350" alt="beer" className="BeerImg"/>
                                </div>
                                <div className="product-info">
                                    <h1>{beer.name}</h1>
                                    <div className='product-text'>
                                    <h3>{beer.tagline}</h3>
                                    <div className='text-description'>
                                    <h6>{beer.description}</h6>
                                    </div>
                                    <>
                                    <Link to={ `/beers/${beer._id}`}>{beer.name}</Link>
                                    </>
                                    </div>
                                    <p><strong>Created by: </strong>{beer.contributed_by}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })
                ) : (
                    APIData.map((beer) => {
                        return (
                            <div className="wrapper">
                            <div key={beer._id}>
                                <div className='product-img'>
                                <img src={beer.image_url} width="150" height="350" alt="beer" className="BeerImg"/>
                                </div>
                                <div className="product-info">
                                    <h1>{beer.name}</h1>
                                    <div className='product-text'>
                                    <h3>{beer.tagline}</h3>
                                    <div className='text-description'>
                                    <h6>{beer.description}</h6>
                                    </div>
                                    <>
                                    <Link to={ `/beers/${beer._id}`}>{beer.name}</Link>
                                    </>
                                    </div>
                                    <p><strong>Created by: </strong>{beer.contributed_by}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })
                )}
            </Card.Group>
        </div>
           
            {/* {loading ? (<p><Loading/></p>) : (
                beers && beers.map(beer => (
                    <div className="wrapper">
                    <div key={beer._id}>
                        <div className='product-img'>
                        <img src={beer.image_url} width="150" height="350" alt="beer" className="BeerImg"/>
                        </div>
                        <div className="product-info">
                            <h1>{beer.name}</h1>
                            <div className='product-text'>
                            <h3>{beer.tagline}</h3>
                            <div className='text-description'>
                            <h6>{beer.description}</h6>
                            </div>
                            <>
                            <Link to={ `/beers/${beer._id}`}>{beer.name}</Link>
                            </>
                            </div>
                            <p><strong>Created by: </strong>{beer.contributed_by}</p>
                        </div>
                    </div>
                </div>
                ))
            )}
             */}
        </div>
        </>
    )
}



export default BeersList;


