import React, { Component } from 'react'


export default class OneBeer extends Component {
     //  console.log()
     state = {
         oneBeer: ''
     }
  
    ONE_BEER = `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`


   componentDidMount = () => {
       fetch(this.ONE_BEER)
       .then(res => {
           return res.json()
       })
       .then((data) => {
         //  console.log(data)
           this.setState({
               oneBeer: data
           })
       })
   }
    render() {
       if (this.state.oneBeer < 1) {
           return <h3>Loading... </h3>
       }

      //  console.log(this.state.oneBeer)
        return (
            <div>
            <img src={`${this.state.oneBeer.image_url}`} alt=""/>
              <div>{}</div>
                <div>{this.state.oneBeer.name}</div>
              <div>{this.state.oneBeer.tagline}</div>
              <div>{this.state.oneBeer.first_brewed}</div>
              <div>{this.state.oneBeer.attenuation_level}</div>
              <div>{this.state.oneBeer.description}</div>
              <div>{this.state.oneBeer.contributed_by}</div>
            </div>
        )
    }
}
