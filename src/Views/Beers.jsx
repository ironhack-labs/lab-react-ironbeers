import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Header";

class Beers extends Component {
    state = {
        beers: [],
      }

      componentDidMount() {
          axios.get("https://ih-beers-api2.herokuapp.com/beers")
          .then((response) => {
            // console.log(response)
              this.setState({ beers: response.data})
          })
          .catch((error) => {
              console.log(error)
          })
      }

    render() {
        if (this.state.beers === []) {
            return <div>Wait a minute...</div>;
          }

        return (
            <section>
                <Header/>

                {this.state.beers.map((beer) => (
                <div key={beer._id}>
                    <Link className="allBeersDiv" to={`/beers/${beer._id}`}>
                        <div className="allBeersImg">
                            <img style={{height: "175px"}} src={beer.image_url} alt=""/>
                        </div>
                        <div className="allBeersDescr">
                            <h2>{beer.name}</h2>
                            <p>{beer.tagline}</p>
                            <p>{beer.contributed_by}</p>
                        </div>
                    </Link>
                    <hr/>
                </div>
                ))}

            </section>
        )
    }
}

export default Beers;
