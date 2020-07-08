import React, { Component } from 'react';

class OneBeer extends Component {

    showOneBeer() {
        let beerFound = this.props.beers.find((oneBeer) =>{
            return ( 
                oneBeer._id === this.props.match.params.beerid
    
            );
        })
        console.log(beerFound)
        if(beerFound)
        return <div>
                    <img src={beerFound.image_url} alt='beer_img'/>
                    <h3>{beerFound.name}</h3>
                    <p>{beerFound.tagline}</p>
                    <p>{beerFound.contributed_by}</p>
                </div>   
    }


    render() {
        console.log(this.props)
        console.log(this.props.match.params.beerid)
        return (
            <div>
                {this.showOneBeer()}
            </div>
        );
    }
}

export default OneBeer;