import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {

        return (
            <div className="home">
                <li>
                    <Link to="/beers">
                        <img src={process.env.PUBLIC_URL + 'images/beers.png'} alt="" />
                        <br />Go to Beers !
                    </Link>
                </li>
                <li>
                    <Link to="/randombeer">
                        <img src={process.env.PUBLIC_URL + 'images/random-beer.png'} alt="" />
                        <br />Random Beer !
                    </Link>
                </li>



                <li>
                    <Link to="/newbeer">
                        <img src={process.env.PUBLIC_URL + 'images/new-beer.png'} alt="" />
                        <br />Add new Beer !
                        </Link>
                </li>
            </div>
        )
    }
}
export default Home
