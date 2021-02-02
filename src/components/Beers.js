import React from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import {Link} from 'react-router-dom'

// import beerList from 'https://ih-beers-api2.herokuapp.com/beers'

class Beers extends React.Component {

    state = {
        beers: []
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        
        .then(response => {
            this.setState({beers: response.data})
        })
    }
    
    render(){
        const beerDetails = [...this.state.beers]
        // const beerTo = {
        //     pathname: `/beers/${beer._id}`,
        //     beers: beerDetails
        // }
        console.log(beerDetails)
    return (
        <div>
            <Navbar />
            <div className='container'>
            <h1>All Beers</h1>
            
            {this.state.beers.map((beer, index) => {
                return(
                    <div key={index} >
                        <Link 
                            to={`/beers/${beer._id}`}
                            className='beerItem'
                            
                                                >
                            <img src={beer.image_url} alt={beer.name}/>
                            <div className='beerItemRight'>
                                <h2>{beer.name}</h2>
                                <h3>{beer.tagline}</h3>
                                <p><strong>Created by: </strong>{beer.contributed_by}</p>
                            </div>
                        </Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
    }
}

export default Beers
