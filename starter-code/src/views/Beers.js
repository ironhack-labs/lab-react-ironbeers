import React, { Component } from 'react';
import axios from "axios"; //  npm i axios
import { NavLink } from "react-router-dom";

export default class Beers extends Component {
    state = {
        beers: [],
        APIEndpoint:
            "https://ih-beers-api2.herokuapp.com/beers"
    };

    componentDidMount() {
        axios
            .get(this.state.APIEndpoint)
            .then(apiRes => this.setState({ beers: apiRes.data }))
            .catch(apiErr => console.error(apiErr));
    }

    render() {
             return this.state.beers.length ? (

                <div className="page">
                    <h1 className="title">Beers</h1>
                    {this.state.beers.map((b, i) => (
                        <div key={i} className="beer1">
                          <div  className="beer11"> <img src={b.image_url} className="img-beer" /> </div>
                          <div  className="beer12">
                              <ul>
                                  <li>
                                      {b.name}
                                  </li>
                                  <li>
                                      {b.tagline}
                                  </li>
                                  <li>
                                      {b.contributed_by}
                                  </li>
                                  <li>
                                      {b._id}
                                      <NavLink  to={`/one-beer/${b._id}`} >See beer</NavLink>
                                  </li>
                              </ul>
                          </div>
                        </div>

                    ))}
                </div>
            )
        :
            (<div>no beers</div>);



    }
}




/*
    componentDidMount() {
        axios
            .get(this.state.APIEndpoint)
            .then(apiRes => this.setState({ trees: apiRes.data.records }))
            .catch(apiErr => console.error(apiErr));
    }

    render() {
        return this.state.trees.length ? (
            <div>
                <h1 className="title">Trees are nice !</h1>
                {this.state.trees.map((t, i) => (
                    <div key={i}>
                        {t.fields.libellefrancais} ({t.fields.espece})
                    </div>
                ))}
            </div>
        ) : (
            <p>no trees yet...</p>
        );
    }
}
*/