import React from 'react'
import axios from 'axios'

export default class CardDetails extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    console.log(this.props)
    axios
      .get(
        `https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.id}`
      )
      .then(({ data }) => {
        this.setState({ data })
        console.log(this.state.data)
      })
      .catch(err => console.log(err))
  }

  render() {
    const {
      image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
      description,
      contributed_by
    } = this.state.data

    return (
      <div className="container">
        <div className="card" style={{ margin: '10px' }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={image_url} alt={name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media-content">
              <p className="title is-3">{name}</p>
              <p className="title is-4">{tagline}</p>
              <p className="title is-4">Level: {attenuation_level}</p>
              <p className="title is-4">{first_brewed}</p>
              <p className="subtitle is-6">{description}</p>
              <p className="subtitle is-6">{}</p>
              <p className="subtitle is-6">
                <strong>{contributed_by}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
