import beersImg from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';
import { Link } from 'react-router-dom';

import React, { Component } from 'react'

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Link to='/beers'>
                    <img src={beersImg}/>
                    <h1>All Beers</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur molestiae vel impedit iusto ullam officia doloribus, quam hic eius, enim suscipit saepe provident aspernatur nulla assumenda repudiandae aliquid quasi eveniet.</p>
                </Link>
                <Link to='/random-beer'>
                    <img src={newBeer} alt="beers in glass"/>
                    <h1>Random Beer</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur molestiae vel impedit iusto ullam officia doloribus, quam hic eius, enim suscipit saepe provident aspernatur nulla assumenda repudiandae aliquid quasi eveniet.</p>
                </Link>
                <Link to='/new-beer'>
                    <img src={randomBeer} alt="beer being pored out"/>
                    <h1>New Beer</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur molestiae vel impedit iusto ullam officia doloribus, quam hic eius, enim suscipit saepe provident aspernatur nulla assumenda repudiandae aliquid quasi eveniet.</p>
                </Link>
            </div>
        )
    }
}
