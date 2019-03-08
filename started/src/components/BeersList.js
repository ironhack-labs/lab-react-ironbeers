import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/misc/Header';

// import { beersList } from '../services/BeersServices';

export default class BeersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          beers: []
        };
      }

      componentDidMount() {
        fetch("https://ironbeer-api.herokuapp.com/beers/all")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                beers: result
              });
              console.log(result)
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error: error
              });
            }
          )
      }

    render () {
      
        const { error, isLoaded, beers } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
              <div className="container">
                <Header></Header>
                {beers.map((beer,index) => (
                  
                        <div key={index} className="box">
                            <article className="media">
                                <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={beer.image_url} alt="Beer"/>
                                </figure>
                                </div>
                                <div className="media-content">
                                <div className="content">
                                    
                                    <h1>{beer.name}</h1><br/>
                                    <p>{beer.tagline}</p>
                                    
                                    <small>{beer.contributed_by}</small>
                                
                                </div>
                            
                                </div>
                            </article>
                        </div>
                    )
                )}

            </div>
          )
        }
      
    }
}
