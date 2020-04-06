import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './home.css';

class Home extends Component {
    // constructor(props) {
    //     super(props)

        // state = {
            
        // }
    // }

    render() {
        return (
          <>
            <button className="button">
                <span>
                  <Link to="/signup">Signup</Link>
                </span>
            </button>

            <div className="container">
              <div className="homeCard">
                <img src="../images/beers.png" alt="" />
                <Link to="/beers" className="containerLink">
                  All beers
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium officia ut minus eligendi, aliquid dolore unde ab
                  ex ullam illum obcaecati perferendis animi voluptas adipisci
                  aperiam recusandae assumenda libero quos.
                </p>
              </div>

              <div className="homeCard">
                <img src="../images/random-beer.png" alt="" />
                <Link to="/random-beer">Random beer</Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium officia ut minus eligendi, aliquid dolore unde ab
                  ex ullam illum obcaecati perferendis animi voluptas adipisci
                  aperiam recusandae assumenda libero quos.
                </p>
              </div>

              <div className="homeCard">
                <img src="../images/new-beer.png" alt="" />
                <Link to="/new-beer">New beer</Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium officia ut minus eligendi, aliquid dolore unde ab
                  ex ullam illum obcaecati perferendis animi voluptas adipisci
                  aperiam recusandae assumenda libero quos.
                </p>
              </div>
            </div>
          </>
        );
    }
}

export default Home;
