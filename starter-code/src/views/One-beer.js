import React, { Component } from 'react';
import axios from "axios"; //  npm i axios

export default class OneBeer extends Component {
    state = {
        beers: [],
        APIEndpoint:
            "https://ih-beers-api2.herokuapp.com/beers",
        oneBeer: []
    };

    componentDidMount() {
        const me = this.props.match.params.beerId ;
        let myBeer = {} ;
        axios
            .get(this.state.APIEndpoint)
            .then(apiRes =>  {

                apiRes.data.forEach(function(beer){
                    if ( beer._id == me  ){
                        console.log(me, "lmkl");
                        myBeer = beer;
                    }
                });
                console.log("my beer", myBeer );
                this.setState({ oneBeer: myBeer })

            })

            .catch(apiErr => console.error(apiErr));

        console.log("one beer", this.props.match.params.beerId );
        //console.log(this.state.beers);
        ///this.state.beers.forEach(function(beer){
        //console.log("biere");
        ///});

    }

    render() {

        return  (

                <div className="page">
                    <h1 className="title">Beer</h1>
                        <div className="beer1">
                          <div  className="beer11"> <img src={this.state.oneBeer.image_url} className="img-beer" /> </div>
                          <div  className="beer12">
                              <ul>
                                  <li>
                                      {this.state.oneBeer.name}
                                  </li>
                                  <li>
                                      {this.state.oneBeer.tagline}
                                  </li>
                                  <li>
                                      {this.state.oneBeer.contributed_by}
                                  </li>
                              </ul>
                          </div>
                        </div>
                </div>
            )
       

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