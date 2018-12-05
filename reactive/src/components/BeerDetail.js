import React, { Component } from "react";
import axios from "axios";

class BeerDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: []
    }
  }

  componentDidMount() {
    const { params } = this.props.match;

    axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${params.beerId}`)
    .then(response => {
      this.setState({details: response.data});
    })
    .catch(err => {
      console.log("Something failed", err);
    });
  }
  
  render() {
    const { details } = this.state;

    return(
      <section>
        <h2>Beer Details</h2>

        <img src={details.image_url} />
        <h3>{details.name}</h3>
        <p>{details.tagline}</p>
        <p><b>First brewed:</b> {details.first_brewed}</p>
        <p><b>Attenuation level:</b> {details.attenuation_level}</p>
        <p>{details.description}</p>
        <p><b>Contributed by:</b> {details.contributed_by}</p>


        <ul>
          {/* {details.map((oneDetail) => {
            return (
              <li> 
                {oneDetail}
              </li>
            )
          })} */}
        </ul>
      </section>
    )
  }
}

export default BeerDetail;