import React from 'react';

const axios = require('axios');

class SingleBeers extends React.Component {
    state = {
        beer: []
    }

    componentDidMount = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`)
            .then( response => {
                this.setState({ beer: response.data })
            })
    }

    render() {
        const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = this.state.beer;

        if (!name) {
            return <div>Loading...</div>
        } 

        return (
            <div className="card">
                <div className="card-img-top m-3">
                    <img src={image_url} style={{height: '250px'}} alt="beer"/>
                </div>
                <div className="card-body text-left">
                    <div className="d-flex justify-content-between">
                        <h3 className="card-title">{ name }</h3>
                        <h3 className="text-secondary">{ attenuation_level }</h3>
                    </div>

                    <div className="d-flex justify-content-between">
                        <h4 className="card-subtitle text-secondary">{ tagline }</h4>
                        <div className="">{ first_brewed }</div>
                    </div>

                    <div className="card-text mt-3 mb-3">{ description }</div>
                    <div className="blockquote-footer">{ contributed_by }</div>
                </div>

            </div>
        )
    }
}

export default SingleBeers;