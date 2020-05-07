import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Home.css'

class Home extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <section className="home-section">
                <Link to='/beers'>
                    <article >
                        <figure>
                            <img src='./../../../../images/beers.png' alt='beers' />
                        </figure>
                        <h1>All Beers</h1>
                        <p>Lorem fistrum llevame al sircoo ahorarr no puedor se calle ustée ese pedazo de al ataquerl
                        la caidita la caidita me cago en tus muelas diodenoo. De la pradera pecador por la gloria
                        de mi madre amatomaa mamaar condemor papaar papaar torpedo fistro pupita.</p>
                    </article>
                </Link>
                <Link to='/randomBeer'>
                    <article >
                        <figure>
                            <img src='./../../../../images/random-beer.png' alt='random beers' />
                        </figure>
                        <h1>Random Beer</h1>
                        <p>Lorem fistrum llevame al sircoo ahorarr no puedor se calle ustée ese pedazo de al ataquerl
                        la caidita la caidita me cago en tus muelas diodenoo. De la pradera pecador por la gloria
                        de mi madre amatomaa mamaar condemor papaar papaar torpedo fistro pupita.</p>
                    </article>
                </Link>
                <article >
                    <figure>
                        <img src='./../../../../images/new-beer.png' alt='add new beer' />
                    </figure>
                    <h1>New Beer</h1>
                    <p>Lorem fistrum llevame al sircoo ahorarr no puedor se calle ustée ese pedazo de al ataquerl
                    la caidita la caidita me cago en tus muelas diodenoo. De la pradera pecador por la gloria
                        de mi madre amatomaa mamaar condemor papaar papaar torpedo fistro pupita.</p>
                </article>

            </section >
        )
    }

}

export default Home