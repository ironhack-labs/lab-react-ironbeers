import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'

export class SingleBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beer:{}
        }
    }
    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                beer: response.data
            })
          })
      }


    
    render() {
        const beer = this.state.beer
        return (
            <div>
                <Header/>
                <h1>Single Beer</h1>
                <img style={{height:"400px"}} src={beer.image_url}/>
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>First brewed: <b>{beer.first_brewed}</b></p>
                <p>Atenuation level: {beer.attenuation_level}</p>
                <h4><u>Description</u></h4>
                <p>{beer.description}</p>
                <p>Contributed by: <b>{beer.contributed_by}</b></p>
            </div>
        )
    }
}

export default SingleBeer
