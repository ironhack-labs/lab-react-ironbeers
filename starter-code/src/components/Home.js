import React, { Component } from 'react'
import beersall from '../images/beers.png';
import randombeer from '../images/random-beer.png';
import newbeer from '../images/new-beer.png';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                <img src={beersall} alt="Beers" height="140" width="400"/>
                <li className="App-title"><Link to="/beers" className="btn btn-primary">All Beers</Link></li>
                <p className="App-intro">Ldasjd djsd skd dieieur  dhjfd eiurei s dsadu aisduasd iadu aisdaid iaud asiduasdy f asgag datasdga d tafdt adta tfa sdsa</p>
                <img src={randombeer} alt="Beers" height="140" width="400"/>
                <li className="App-title"><Link to="/random-beers" className="btn btn-primary">Random Beers</Link></li>
                <p>Ldasjd djsd skd dieieur  dhjfd eiurei s dsadu aisduasd iadu aisdaid iaud asiduasdy f asgag datasdga d tafdt adta tfa sdsa</p>
                <img src={newbeer} alt="Beers" height="140" width="400"/>
                <li className="App-title"><Link to="/new-beers" className="btn btn-primary">New Beers</Link></li>
                <p>Ldasjd djsd skd dieieur  dhjfd eiurei s dsadu aisduasd iadu aisdaid iaud asiduasdy f asgag datasdga d tafdt adta tfa sdsa</p>
                </ul>
            </div>
        )
    }
}
