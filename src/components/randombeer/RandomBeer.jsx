import React, { Component } from 'react'
import Axios from 'axios'

const RANDOMBEER_FROM_DB = 'https://ih-beers-api2.herokuapp.com/beers/random'



export default class RandomBeer extends Component {

    state = {
        randomBeer: ''

    }

    componentDidMount (){
        Axios 
        .get(RANDOMBEER_FROM_DB)
        .then(response => {
            this.setState({ randomBeer: response.data })
        })
    }

    
    render() {
        if(this.state.randomBeer.length < 1) {
            return <h1>Loading</h1>
          }
      
        const beerDetails = this.state.randomBeer

        return (

            <div className='d-flex justify-content-center align-items-center' style={{height: "100vh"}}>
                        <div className="card mb-3 border-white" style={{maxWidth: "540px"}}>
                            <div className='row no-gutters'>
                                <div className='col-md-4 w-25 p-4 '>
                                    <img className='card-img img-fluid' src={beerDetails.image_url} alt={beerDetails.name}></img>
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body'>
                                        <h2 className='card-title'>{beerDetails.name}</h2>
                                        <h5 className='font-weight-normal '>{beerDetails.tagline}</h5>
                                        <div className='d-flex justify-content-between'>
                                        
                                            <p className='text-muted'>{beerDetails.first_brewed}</p>
                                            <p className='font-weight-bold text-muted'>{beerDetails.attenuation_level}</p>
                                        </div>
                                
                                        
                                        <p className='card-text'>{beerDetails.description}</p>
                                        <p className='card-text'><small className='text-muted'>Created by: {beerDetails.contributed_by}</small> </p>
                                    </div>

                                </div>

                            </div>

                        </div>


            </div>
        )
    }
}


