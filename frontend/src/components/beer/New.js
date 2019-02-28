import React from "react"
import axios from "axios"

class Beers extends React.Component {
  state = {
    beer: {},
    authenticated: false,
    loading: true,
    message: ""
  }

  componentDidMount() {
    let url = "http://localhost:3000/isauth"
    axios
      .get(url, { withCredentials: true })
      .then(() => {
        this.setState({ authenticated: true, message: "Logueado" })
      })
      .catch(e => console.log(e))
  }

  newBeer = () => {
    let { beer } = this.state
    let url = "https://ironbeer-api.herokuapp.com/beers/new"
    console.log(beer)
    axios
      .post(url, beer)
      .then(res => {
        console.log(res.data)
        this.setState({
          beer: res.data,
          loading: false,
          message: "Crear una nueva"
        })
      })
      .catch(e => console.log(e))
  }
  handleChange = e => {
    let { beer } = this.state
    beer[e.target.name] = e.target.value
    this.setState({ beer })
  }

  render() {
    let { beer, message } = this.state
    return (
      <div>
        <h3>{message}</h3>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          onChange={this.handleChange}
          type="text"
          name="description"
          placeholder="description"
        />
        <input
          onChange={this.handleChange}
          type="text"
          name="tagline"
          placeholder="tagline"
        />
        <input
          onChange={this.handleChange}
          type="text"
          name="first_brewed"
          placeholder="first_brewed"
        />
        <input
          onChange={this.handleChange}
          type="text"
          name="brewers_tips"
          placeholder="brewers_tips"
        />
        <input
          onChange={this.handleChange}
          type="number"
          name="attenuation_level"
          placeholder="attenuation_level (a number)"
        />
        <input
          onChange={this.handleChange}
          type="text"
          name="contributed_by"
          placeholder="contributed_by"
        />
        <button onClick={this.newBeer}>Crear nueva cerveza</button>
      </div>
    )
  }
}

export default Beers
