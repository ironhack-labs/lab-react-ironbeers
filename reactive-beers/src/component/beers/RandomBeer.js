import React, { Component } from 'react'
import { getRandomBeer } from '../../services/Api';
import { Link } from 'react-router-dom'

class RandomBeer extends Component {
    state = {
        beer: []
    }

    componentWillMount = () => {
        getRandomBeer()
            .then(beer => this.setState({ beer }))
            .catch(err => console.log(err))
    }
    render() {
        console.table(this.state.beer)
        const { beer } = this.state
        return (
            <div className="container">
                <Link className="btn btn-primary" to="/" style={{ width: '100%' }}> Home</Link>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="card col-md-6">
                        <div className="d-flex justify-content-center align-items-center">
                            <img className="card-img-top" src={beer.image_url} alt="" style={{ maxWidth: '10%' }} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{beer.name}</h5>
                            <p className="card-text">{beer.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomBeer