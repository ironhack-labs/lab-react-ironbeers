import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            < div >
                <Link to="/beers">
                    <div className="all">

                        <img src="http://kirkwoodstationbrewing.com/wp-content/uploads/2013/07/ksb-our-beers-header.jpg" alt="Cervezas" />
                        <h2> All beers </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eum commodi nam quae atque debitis aperiam, dignissimos numquam odit, sapiente blanditiis provident! Necessitatibus, veritatis fugiat deserunt odio ab hic vitae!</p>
                    </div>
                </Link>
                <div></div>
                <div className="all">
                    <img src="https://www.dambrewery.com/wp-content/uploads/2015/12/making-dam-beer-1024x600.jpg" alt="Cervezas" />
                    <h2> Random beers </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eum commodi nam quae atque debitis aperiam, dignissimos numquam odit, sapiente blanditiis provident! Necessitatibus, veritatis fugiat deserunt odio ab hic vitae!</p>
                </div>
                <div></div>
                <div className="all">
                    <img src="http://www.abc.net.au/news/image/6350940-3x2-940x627.jpg" alt="Cervezas" />
                    <h2> New beer </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eum commodi nam quae atque debitis aperiam, dignissimos numquam odit, sapiente blanditiis provident! Necessitatibus, veritatis fugiat deserunt odio ab hic vitae!</p>
                </div>
            </div >
        )
    }
} 