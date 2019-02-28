import React from "react"
import axios from "axios"

class Beers extends React.Component {
  state = {
    beer: {},
    authenticated: false,
    loading: true,
    message: "",
    random: false
  }

  componentDidMount() {
    let url = "http://localhost:3000/isauth"
    axios
      .get(url, { withCredentials: true })
      .then(() => {
        this.getBeers()
        this.setState({ authenticated: true, message: "Logueado" })
      })
      .catch(e => console.log(e))
  }

  getBeers = () => {
    let url = "https://ironbeer-api.herokuapp.com/beers/single/"
    let urlRandom = "https://ironbeer-api.herokuapp.com/beers/random"
    let { id } = this.props.match.params
    axios
      .get(id === "random" ? urlRandom : url + id)
      .then(res => {
        let beer = id === "random" ? res.data[0] : res.data
        this.setState({ beer: beer, loading: false, message: "Cerveza" })
      })
      .catch(e => console.log(e))
  }

  render() {
    let { beer, message } = this.state
    return (
      <div>
        <h3>{message}</h3>
        <img src={beer.image_url} alt={beer.name} />
        <h4>{beer.name}</h4>
        <p>{beer.description}</p>
        <p>{beer.brewers_tips}</p>
      </div>
    )
  }
}

export default Beers
