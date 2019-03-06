import React, { Component } from "react";

class BeersList extends Component {
  state = {};

  getSingleBeer = () => {
    const { params } = this.props.match;
    console.log(params);
    fetch(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`).then(
      reponseApi => {
        reponseApi.json().then(data => {
          console.log(data);
          const {
            name,
            tagline,
            description,
            image_url,
            contributed_by,
            created_at,
            attenuation_level,
            first_brewed
          } = data;
          this.setState({
            name,
            tagline,
            description,
            image_url,
            contributed_by,
            created_at,
            attenuation_level,
            first_brewed
          });
        });
      }
    );
  };

  componentDidMount() {
    this.getSingleBeer();
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="card card-w  ">
          <img
            src={this.state.image_url}
            alt="cervezas"
            className="item-list"
          />
          <div className="card-body">
            <h3 className="card-title">{this.state.name}</h3>
            <h3>{this.state.attenuation_level}</h3>
            <div>
              <h4>{this.state.tagline}</h4>
              <span>{this.state.first_brewed}</span>
            </div>
            <p className="card-text">{this.state.description}</p>
            <span>{this.state.contributed_by}</span>
          </div>
          <a href="/beerlist" className="btn btn-primary">
            Regresar Todas las cervezas
          </a>
        </div>
      </div>
    );
  }
}

export default BeersList;
