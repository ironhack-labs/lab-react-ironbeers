import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

class SingleBeer extends Component {
    constructor(props){
        super(props);
        this.state = {
            theBeer:[]
        };
    }
      componentDidMount() {
        this.getSingleBeer();
      }
    
      componentWillUnmount() {
        this.setState = (state, callback) => {
          return;
        };
      }

      getSingleBeer = () => {
        const { params } = this.props.match;
        axios.get(`https://api.punkapi.com/v2/beers/${params.id}`)
        .then(responseFromApi => {
          const theBeer = responseFromApi.data;
          this.setState({theBeer: theBeer});
          })
          .catch(error => console.log(error));
      };

    render(){
        return(
            <div>
                <Navbar/>
                {this.state.theBeer.map((beer, index) => {
                    return (
                        <div key="index">
                        <div className="cardImgRandom">
                            <img src={beer.image_url} alt={beer.name} className="imgBeerRandom"/>
                        </div>
                        <div className="titleRandom">
                            <h3>{beer.name}</h3>
                            <h3 className="attenuation">{beer.attenuation_level}</h3>
                        </div>
                        <div className="subTitleRandom">
                            <p className="tagline">{beer.tagline}</p>
                            <p className="brewed"><strong>{beer.first_brewed}</strong></p>
                        </div>
                        <div className="description">
                            <p>{beer.description}</p>
                        </div> 
                    </div>
                    );
            })}
            </div>
        )
    }

}
export default SingleBeer;