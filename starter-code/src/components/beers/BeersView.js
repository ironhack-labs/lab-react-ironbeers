import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'

export default class BeersAll extends Component {

    state = {
        beers: []
    }

    getChelas = async () => {
        const response = await axios.get('https://ih-beer-api.herokuapp.com/beers')
        this.setState({
          beers: response.data
        })
      }
    
      componentDidMount() {
        this.getChelas()
      }

    render() {
        const { beers } = this.state;
        console.log(beers);
        return (
            <>
            <Navbar adonde={'/'} />
            <div className="columns is-centered is-mobile">
                <div className="column is-8">
                { beers.length === 0 && <i className="button is-link is-loading">Loading</i> }
                    {
                        beers.map(beer => (
                            <Link to={`/beers/${beer._id}`} key={beer._id} className="box">
                                <article className="media">
                                    <div className="media-left">
                                        <figure className="image is-32x32">
                                            <img src={beer.image_url} alt={beer.name} />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>{beer.name}</strong>
                                                {beer.tagline}
                                                <br /></p>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
        );
      }

}
