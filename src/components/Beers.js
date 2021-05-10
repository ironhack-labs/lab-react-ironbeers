import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Beers extends Component {
    state = {
        beers: null
    }
    getBeerData = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            // console.log(response.data);
            this.setState({
              beers: response.data
            })
        })
        .catch(err => console.log(err));
    }
    componentDidMount() {
        this.getBeerData();
    }
    componentDidUpdate(prevProps) {
        if(prevProps.match.params.id !== this.props.match.params.id) {
          this.getBeerData();
        }
    }

    render() {
        const beers = this.state.beers;
        // component will be mounted after the render is called (TypeError: Cannot read property 'name' of null), so we need to add a loading status
        if (!beers) return <h1>Loading ...</h1>

        const list = this.state.beers.map(beer => {
            return (
                <div className="beer-card" key={beer._id}>
                    <img src={beer.image_url} alt="" />
                    <div className="text">
                        <Link to={`/beers/${beer._id}`}><h2>{beer.name}</h2></Link>
                        <h3>{beer.tagline}</h3>
                        {beer.contributed_by &&  <p><span>Created by: </span>{beer.contributed_by}</p>}
                    </div>
                </div>
            )
        })
        return (
            <div className="beer-list">
                {list}
            </div>
        )
    }
}
