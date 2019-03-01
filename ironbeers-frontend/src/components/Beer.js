import React from 'react'
import axios from 'axios'
const endpoint = 'https://ironbeer-api.herokuapp.com/beers/single/'

// import { withRouter } from 'react-router-dom'


class Beer extends React.Component{
    state={
        beer:{}
    }

componentDidMount(){
    const { id } = this.props.match.params
   
    axios.get(endpoint + id)
    .then(response => {
      this.setState({ beer: response.data })
     console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
}

    render(){
        const {beer} = this.state
        
        return(
            <div className="beer-container">
                <div className="beer-card">
                <h1>{beer.name}</h1>
                <img src={beer.image_url} alt="" height="200" />
                <p>{beer.tagline}</p>
                <p>{beer.description}</p>
                </div>
            </div>

        )
    }
}
export default Beer