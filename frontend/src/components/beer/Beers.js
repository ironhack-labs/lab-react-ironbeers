import React from "react"
import axios from "axios"

class Beers extends React.Component {
  state = {
    beers: [],
    authenticated: false,
    loading: true,
    message: "",
    search: ""
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
    let url = "https://ironbeer-api.herokuapp.com/beers/all"
    axios
      .get(url)
      .then(res => {
        console.log(res.data)
        this.setState({ beers: res.data, loading: false, message: "Cervezas" })
      })
      .catch(e => console.log(e))
  }

  searchBeer = e => {
    let { search } = this.state
    let url
    search = e.target.value
    this.setState({ search })
    search === ""
      ? (url = "https://ironbeer-api.herokuapp.com/beers/all")
      : (url = "https://ironbeer-api.herokuapp.com/beers/search?q=")
    axios.get(url + search).then(res => {
      this.setState({
        beers: res.data,
        loading: false,
        message: `Resultados de ${search}`
      })
    })
  }
  render() {
    let { beers, message } = this.state
    return (
      <div className="beercontainer">
        <input onChange={this.searchBeer} type="text" name="search" />
        <h3>{message}</h3>
        {beers.map(b => {
          return (
            <div key={b._id} className="beercard">
              <a href={`/beers/${b._id}`}>
                <div>
                  <img src={b.image_url} alt={b.name} />
                </div>
                <div>
                  <h3>{b.name}</h3>
                  <p>{b.tagline}</p>
                  <p>Created by: {b.contributed_by}</p>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Beers
