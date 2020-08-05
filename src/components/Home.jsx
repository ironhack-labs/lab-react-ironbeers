import React, { Component } from 'react';
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

export class Home extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       beers: [],
  //     };
  //   }
  //   componentDidMount() {
  //     axios.get('https://ih-beers-api2.herokuapp.com/beers');
  //   }
  render() {
    return (
      <div style={{ display: 'inline-block' }}>
        <h1>Home 2</h1>
        <div className="align-self-center">
          <div className="card" style={{ width: '18rem' }}>
            <Link to="/beers">
              <img
                className="card-img-top"
                src="https://bit.ly/2EK521J"
                alt="Beers"
              />
            </Link>

            <div className="card-body">
              <h5 className="card-title">All beers</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/beers" className="btn btn-primary">
                All beers
              </a>
            </div>
          </div>
          {/* SECOND CARD */}

          <br />

          <div className="card" style={{ width: '18rem' }}>
            <Link to="/random-beers">
              <img
                className="card-img-top"
                src="https://cutt.ly/PdzCUDA"
                alt="Beers"
              />
            </Link>

            <div className="card-body">
              <h5 className="card-title">Random beer</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/random-beers" className="btn btn-primary">
                Random beer
              </a>
            </div>
          </div>

          {/* THIRD CARD */}

          <br />

          <div className="card" style={{ width: '18rem' }}>
            <Link to="/new-beer">
              <img
                className="card-img-top"
                src="https://cutt.ly/7dzVE2q"
                alt="Beers"
              />
            </Link>

            <div className="card-body">
              <h5 className="card-title">New beer</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/new-beer" className="btn btn-primary">
                New beer
              </a>
            </div>
          </div>

          {/* END OF CARDS */}
        </div>
      </div>
    );
    // return (
    //   <div>
    //     <h1>ESTE ES EL HOME</h1>

    //     <div className="card booking-card">
    //       <div className="view overlay">
    //         <img
    //           className="card-img-top"
    //           src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg"
    //           alt="Card image cap"
    //         />
    //         <a href="#!">
    //           <div className="mask rgba-white-slight"></div>
    //         </a>
    //       </div>

    //       <div className="card-body">
    //         <h4 className="card-title font-weight-bold">
    //           <a>La Sirena restaurant</a>
    //         </h4>

    //         <p className="mb-2">$ • American, Restaurant</p>

    //         <p className="card-text">
    //           Some quick example text to build on the card title and make up the
    //           bulk of the card's content.
    //         </p>

    //         <p className="lead">
    //           <strong>Tonight's availability</strong>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default Home;
