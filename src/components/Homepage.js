import React, {Component} from 'react';
import {Card} from 'react-bootstrap'

class Homepage extends React.Component {
    constructor(props){
        super();
    }
    render() {
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" style={{ width: '4rem' }} src="https://images.punkapi.com/v2/2.png" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">All Beers</h5>
                        <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" style={{ width: '4rem' }} src="https://images.punkapi.com/v2/12.png" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Random Beer</h5>
                        <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" style={{ width: '4rem' }} src="https://images.punkapi.com/v2/15.png" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">New Beer</h5>
                        <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                    </div>
                </div>
            </div>


        );
    };

}

export default Homepage;    