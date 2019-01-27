import React, { Component } from 'react'
import NavBar from "../NavBar/NavBar";
import axios from "axios";

export default class SingleBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          beersList: null
         };
      }
    
      getSingleBeer = () => {
        const { params } = this.props.match;
        axios
          .get(`https://ironbeer-api.herokuapp.com/beers/${params._id}`)
          .then(responseFromApi => {
            this.setState({ ...this.state, 
              beersList: responseFromApi.data
            });
          });
      };
    
      componentDidMount() {
        this.getSingleBeer();
      }
    
      render() {
        return this.state.beersList ? (
          <div>
            <div>
              <NavBar />
            </div>
            <div style={{ width: "100%", float: "left" }}>
                  <div>
                      <h3>{this.state.beersList.name}</h3>
                    <p style={{ maxWidth: "400px" }}>{this.state.beersList.tagline} </p>
                    <h3>Created by: </h3><p>{this.state.beersList.contributed_by}</p>
                    <img src={this.state.beersList.image_url} alt=""/>
                  </div>
                );
              })}
            </div>
          </div>
            ) : (
              <p>Loading...</p>
        );
      }
    }
    
  