import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class SingleBeer extends Component {

    state = {
        SingleBeer: null
    }

    // Make your /api/todos/:id requst here
    // check your server side routes to know the right url
    async componentDidMount() {
        try {
          let { beerId } = this.props.match.params;
          await axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((res) => {
              this.setState({
                SingleBeer: response.data,
              });
            });
        } catch (err) {
          console.log('Unable to fetch beer', err);
        }
      }

    render() {

        if (!this.state.SingleBeer) {
            return {'Loading...'}
        } 

        const {SingleBeer} = this.state
        return (
        
            <div>
              <img src={SingleBeer.image_url}/>
              <p>{SingleBeer.name}</p>
              <p>{SingleBeer.tagline}<p/>
              <p>First brewed:{SingleBeer.first_brewed}</p>
              <p>Attenuation level: {SingleBeer.attenuation_level}</p>
              <p> {SingleBeer.description}</p>
              <p>Created by: {SingleBeers.contributed_by}</p>
          </div>
        )
    }
}

export default SingleBeer