import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      beers: [],
      random: '',
    }
  }

  componentDidMount() {
    axios.get('https://ih-beer-api.herokuapp.com/beers')
      .then((res) => {
        this.setState({ beers: res.data });
      })
      .catch(err => console.log(err));

      axios.get('https://ih-beer-api.herokuapp.com/beers/random')
      .then((res) => {
        this.setState({ random: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="home-content">
        <div className="card container-fluid" style={{width: '100vw'}}>
          <img src="/img/beers.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">All Beers</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate dictum diam in tincidunt. Donec fermentum est vitae est maximus facilisis. Sed sapien enim, ornare in nulla non, finibus aliquet felis. Curabitur elementum ligula neque. Sed pulvinar quam non commodo tincidunt. Nam nec convallis ante. Aliquam viverra risus mauris, a cursus lectus placerat facilisis. Aenean ac mollis dui.</p>
            <Link to={{ pathname: '/beers', state: { beersData: this.state.beers } }} className="btn btn-primary">All Beers</Link>
          </div>
        </div>
        <div className="card container-fluid" style={{width: '100vw'}}>
          <img src="/img/random-beer.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Random Beer</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate dictum diam in tincidunt. Donec fermentum est vitae est maximus facilisis. Sed sapien enim, ornare in nulla non, finibus aliquet felis. Curabitur elementum ligula neque. Sed pulvinar quam non commodo tincidunt. Nam nec convallis ante. Aliquam viverra risus mauris, a cursus lectus placerat facilisis. Aenean ac mollis dui.</p>
            <Link to={{ pathname: '/random-beer', state: { beerInfo: this.state.random } }} className="btn btn-primary">Random Beer</Link>
          </div>
        </div>
        <div className="card container-fluid" style={{width: '100vw'}}>
          <img src="/img/new-beer.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">New Beer</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate dictum diam in tincidunt. Donec fermentum est vitae est maximus facilisis. Sed sapien enim, ornare in nulla non, finibus aliquet felis. Curabitur elementum ligula neque. Sed pulvinar quam non commodo tincidunt. Nam nec convallis ante. Aliquam viverra risus mauris, a cursus lectus placerat facilisis. Aenean ac mollis dui.</p>
            <Link to="/new-beer" className="btn btn-primary">New Beer</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
