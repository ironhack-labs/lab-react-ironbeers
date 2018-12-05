import React, { Component } from "react";
import Axios from "axios";
import "./style/Beers.scss"
import { Link } from "react-router-dom";

class Beers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beersArray: []
    }
  }

  componentDidMount() {
    Axios.get("https://ironbeer-api.herokuapp.com/beers/all")
      .then(response => {
        console.log(response.data);
        this.setState({ beersArray: response.data })
      })
      .catch(err => {
        console.log("Something went wrong", err)
      })
  }

  render() {
  const { beersArray } = this.state;
    return(
      <section>
        {beersArray.sort((a, b) => a[0] > b[0]).map(oneBeer => {
          return (
            <li>
              <Link to="/beers/new">Add a New Beer</Link>
              <Link to={`/beers/${oneBeer._id}`}><h2>{oneBeer.name}</h2></Link>
              <p>{oneBeer.tagline}</p>
              <p>{oneBeer.first_brewed}</p>
              <p>{oneBeer.contributed_by}</p>
              <img src={oneBeer.image_url} />
            </li>
          )
        })}
      </section>
    )
    
  }
}

export default Beers;