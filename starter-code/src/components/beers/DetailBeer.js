import React from 'react'
import axios from 'axios'
import Navbar from '../Navbar'

export default class DetailBeer extends React.Component {
  state = {
    beer: {}
  };

  componentDidMount = async () => {
    const { id } = this.props.match.params

    const { data: beer } = await axios.get(`https://ih-beer-api.herokuapp.com/beers/${id}`)

    this.setState(() => {
      return { beer }
    })
  }

  componentDidUpdate = async prevProps => {
    const { id } = prevProps.match.params
    if (id !== this.props.match.params.id) {
      const { data: beer } = await axios.get(`https://ih-beer-api.herokuapp.com/beers/${id}`)
      this.setState(() => {
        return { beer }
      })
    }
  }

  render() {
    const { beer } = this.state;
    return (
      <>
      <Navbar adonde={'/'} />
      <div className="columns is-centered is-mobile">
        <div className="column is-8">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={beer.image_url} alt={beer.name} className="ironImage" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-2">{beer.name}</p>
                  <p className="subtitle is-5">{beer.tagline}</p>
                  
                </div>
              </div>
              <div className="content">
              <p className="title is-6">{beer.first_brewed}</p>
              {beer.description}
                <br />
                <strong>Contributed by: {beer.contributed_by}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
