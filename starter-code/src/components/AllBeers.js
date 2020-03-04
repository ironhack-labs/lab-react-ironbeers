import React, { Component } from 'react';

class AllBeers extends Component {
    render() {
        return(
            
            this.props.beers.map(beer=>{
                return(
                    <div className="beer-container">
                        <img alt="" src={beer.image_url}/>
                        <p>{beer.name}</p>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                    </div>
                )
            })
                
        )
    }
}

export default AllBeers;