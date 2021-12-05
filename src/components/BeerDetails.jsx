import React from 'react'
import spinner from "../logo.svg"
import Header from '../components/Header'


const BeerDetails = (props) => {

    const { beer, isLoading, isError } = props

    return (
        <div>
            <Header />

            { isLoading 
                    && 
                <p className="loading">
                    Beer is loading...
                    <img src={spinner} className="spinner" alt="spinner"/>
                </p> 
            }

            { isError ? 
                <p>Hey there's an error</p>
                :
                <div className="single-beer-page">
                    <div className="beer-image">
                        <img src={beer.image_url} alt={`pic beer ${beer.name}`}/>
                    </div>
                    <div className="beer-info">
                        <div className="flex-box-line">
                            <span className="beer-name">{beer.name}</span>
                            <span className="beer-attenuation_level">{beer.attenuation_level}</span>
                        </div>
                        <div className="flex-box-line">
                            <span className="beer-tagline">{beer.tagline}</span>
                            <span className="beer-first_brewed">{beer.first_brewed}</span>
                        </div>
                        <span className="beer-description">{beer.description}</span>
                        <span className="beer-createdby">{beer.contributed_by}</span>
                    </div>  
                </div>
            }
        </div>
    )
}

export default BeerDetails
