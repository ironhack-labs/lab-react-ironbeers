import React, { Component } from 'react';
import Axios from 'axios';
import NaviBar from './NaviBar'

export default class BeerDetail extends Component {
  state = {
    beerDetail: {},
  };

  componentDidMount() {
    let idBeer = this.props.match.params.beerId;
    console.log('this.props.match.params is:', this.props.match.params);
    console.log('this.props.match is:', this.props.match);
    console.log('this.props is:', this.props);

    Axios.get(`https://ih-beers-api2.herokuapp.com/beers/${idBeer}`).then(
      (response) => {
        console.log('response.data is: ', response.data);

        this.setState({
          beerDetail: response.data,
        });
      }
    );
  }

  render() {
    const {
      image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
      description,
      contributed_by,
    } = this.state.beerDetail;

    return (
      <div><NaviBar/>
      <div>
        <div className="card" style={{width: "18rem"}}>
          <div className="card-body">
          <img src= {image_url} style={{height: "200px", textalign: "center"}} alt="beerpic"/>
            <h3 className="card-title">{name}</h3>
            <h4 className="card-subtitle mb-2 text-muted">{tagline}</h4>
            <aside>
                <p>{first_brewed}</p>
                <p>{attenuation_level}</p>
            </aside>
            <p className="card-text">
              {description}
            </p>
            <p className="contributed-by">{contributed_by}</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
