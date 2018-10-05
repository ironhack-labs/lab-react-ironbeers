import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


export default class AllBeers extends React.Component {
  constructor() {
    super()
    this.state = {
      listBeers: []
    }
  }
  componentDidMount = () => {
    this.retrieveAllBeers()
  }

  retrieveAllBeers = () => {
    axios.get('https://ironbeer-api.herokuapp.com/beers/all')
    .then(res => {
      this.setState({
        listBeers: res.data
      })
      console.log(res.data)
    })
  }
  
  render() {
    return(
      <div>
      <div style={{width: '60%', float:"left" }}>
        { this.state.listBeers.map((beer, index) => {
          console.log("PASA")
          return (
            <div style={{display:"flex"}}>
              <img src= {beer.image_url} style={{maxWidth:200,maxHeight: 200}} alt="beer-img"/> 
              <div>
              <Link to={`/beers/${beer._id}`}>
                 {beer.name}
                </Link>
                
              <p>{beer.tagline}</p>
              <p>Created by: <strong>{beer.contributed_by}</strong></p>
              </div>
            </div>
          )})
        }
      </div>
    </div>
    )
  }
}

