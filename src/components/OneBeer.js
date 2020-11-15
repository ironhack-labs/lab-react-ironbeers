import React, { Component } from 'react'

export class OneBeer extends Component {
    render() {
        let getBeer = id => this.props.arrBeers.find(obj => {
            console.log(obj.id, id)
            return obj.id == id
        });
        console.log(this.props.arrBeers)
        const {params} = this.props.match;
        let beer = getBeer(params.id)
        console.log(beer)
        return (
            <div>
                <img src={beer.image_url} alt={beer.name}/>
                <p>{beer.name}</p>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </div>
        )
    }
}

export default OneBeer
