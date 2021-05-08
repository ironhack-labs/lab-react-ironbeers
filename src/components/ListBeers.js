
import React from 'react'
import Header from './Header'
 import { Link } from "react-router-dom"; 

class ListBeers extends React.Component {
    render(){
        const allBeers = this.props.allBeers.map((beer, index) =>{
            return (
                <div key={index} className='allListBeers'>
                   <img src={beer.image_url} alt={beer.name} /> 
                   <div className='beerInfo'>
                <Link to={`/beers/${beer._id}`}>
                   <h3>{beer.name}</h3>
                </Link>
                   <p className='tagline'>{beer.tagline}</p>
                   <p><strong>Created by: </strong>{beer.contributed_by}</p>
                   <hr />
                   </div>
                </div>
            )
        })
        return(
            <div className='ListBeers'>
                <Header />
                {this.props.allBeers.length === 0 ? <p>Loaging...</p> : <div>{allBeers}</div>}
                
            </div>
        )
    }
}

export default ListBeers