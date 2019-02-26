import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class SingleBeer extends Component {
    constructor(props) {
        super()
        this.state = { beers: [] }
    }

    componentDidMount() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/all")
            .then(response => {
                response.data.map(a => {
                    if (a._id === this.props.match.params.id) this.setState({ beers: a })
                })
            })
    }



    render() {
        { console.log(this.state.beers) }
        return (
            <div className="">
                <h1>{this.state.beers.name}</h1>
                <img src={this.state.beers.image_url} />
                <div className='row'>
                    <div className='col-12'>
                        <h3>Name</h3>
                        <p>{this.state.beers.name}</p>
                    </div>
                    <div className='col-12'>
                        <h3>Description</h3>
                        <p>{this.state.beers.description}</p>
                    </div>
                    <div className='col-12'>
                        <h3>First Brewed</h3>
                        <p>{this.state.beers.first_brewed}</p>
                    </div>
                    <div className='col-12'>
                        <h3>Contributed...</h3>
                        <p>{this.state.beers.contributed_by}</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default SingleBeer;
//const params = props.match.params.id;