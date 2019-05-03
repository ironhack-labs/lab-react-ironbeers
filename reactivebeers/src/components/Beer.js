import React, { Component } from 'react'
import axios from "axios";


export default class Beer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beer: {}
    }
  }

  componentDidMount(){
    axios
        .get(`http://localhost:5000/single/${this.props.match.params._id}`)
        .then(beer => {
            const oneBeer = beer.data
            console.log(oneBeer)
  
            this.setState({
                ...this.state,
                beer: oneBeer
            })
        })
  }
 
  render() {
    console.log(this.state.beer)
    var beer= this.state.beer
    return (
      <div className="beer">
            <div>
            <img src={beer.image_url}/>
            </div>
            <div>
            <p>{beer.name}</p>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            </div>
           
      </div>
    )
  }
}
