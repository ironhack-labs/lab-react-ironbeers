import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Beers extends Component {
  constructor(props) {
    super(props);
    console.log('Beer constructor', props);
    this.state = {
      beer: [],
    };
  }

  onMountOrUpdate = () => {
    console.log('Beer onMountOrUpdate');
    const beerId = this.props.random
      ? 'random'
      : this.props.match.params.beerId;
    console.log('Beer onMountOrUpdate', beerId);

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((resp) =>
        this.setState({
          beer: resp.data,
        })
      )
      .catch((error) => console.error(error));
  };

  componentDidMount() {
    console.log('Beer componentDidMount');
    //console.log('Beer componentDidMount', this.props.match.params.beerId);
    this.onMountOrUpdate();
  }

  componentDidUpdate(prevProps) {
    console.log('Beer componentDidUpdate');

    if (
      !this.props.random &&
      prevProps.match.params.beerId !== this.props.match.params.beerId
    ) {
      console.log('Beer componentDidUpdate - redo beer axios');
      this.onMountOrUpdate();
    }
  }

  render() {
    console.log('Beer render');
    //console.log('Beer render', this.props.match.params.beerId);
    if (this.state.beer.length === 0) return <h3>Loading...</h3>;

    const { beer } = this.state;

    console.log('Beer render after loading');
    return (
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between">
            <Link className="text-decoration-none" to="/beers">
              {this.props.random ? 'All Beers ' : '<< Back'}
            </Link>
            {/* using link to provoke a full refresh - TODO: find another way*/}
            {this.props.random && (
              <a className=" text-decoration-none" href="/random-beer">
                Another Random
              </a>
            )}
          </div>
        </div>
        <div className="row">
          <div className="card">
            <div className="card-header">{beer.name}</div>
            <div className="card-horizontal">
              <div className="img-square-wrapper biggerimg">
                <img className="" src={beer.image_url} alt={beer.name} />
              </div>
              <div className="card-body">
                <h4 className="card-title">{beer.name}</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    {beer.first_brewed} - {beer.attenuation_level}
                  </li>
                  <li className="list-group-item">{beer.tagline}</li>
                </ul>
                <p className="card-text border-top pt-4">{beer.description}</p>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                Created by: {beer.contributed_by}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
