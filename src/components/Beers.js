import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';




class Beers extends React.Component {
    render(){
    return (
        <div className='beer-container'>
        <Header/>
        <h2>All Beers</h2>
        {this.beers.map((beer)=>{
            return(
                <div>
                    <div>
                        <img src={beer.imgage_url} alt="" />
                    </div>
                    <div>
                    <h4>{beer.name}</h4>
                    <h5>{beer.tagline}</h5>
                    <p>{beer.contributed_by}</p>
                  </div>
                  <Link to={`/beers/${beer.id}`} >More details</Link>
                </div>
            )
        })}
       
        </div>
    )
    }
}


export default Beers;