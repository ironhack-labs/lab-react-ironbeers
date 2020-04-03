import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom';


class Home extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className='home'>
                <Link to={'/AllBeers'}>
                    <img src="../images/beers.png" alt=""/>
                    <h1>All Beers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus mollitia voluptatum odio, obcaecati architecto adipisci ab! Quod voluptate, incidunt voluptatum maiores, optio odio quas recusandae, sapiente reiciendis earum praesentium voluptatibus!</p>
                </Link>
                <Link to={'/RandomBeers'}>
                    <img src="../images/random-beer.png" alt=""/>
                    <h1>Random Beers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus mollitia voluptatum odio, obcaecati architecto adipisci ab! Quod voluptate, incidunt voluptatum maiores, optio odio quas recusandae, sapiente reiciendis earum praesentium voluptatibus!</p>
                </Link>
                <Link to={'/NewBeer'}>
                    <img src="../images/new-beer.png" alt=""/>
                    <h1>New Beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus mollitia voluptatum odio, obcaecati architecto adipisci ab! Quod voluptate, incidunt voluptatum maiores, optio odio quas recusandae, sapiente reiciendis earum praesentium voluptatibus!</p>
                </Link>

            </div>
        )
    }
}

export default Home