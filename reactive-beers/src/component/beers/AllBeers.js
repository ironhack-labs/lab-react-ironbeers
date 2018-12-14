import React, { Component } from 'react'
import { getAllBeers } from '../../services/Api'
import { Link } from 'react-router-dom'

class AllBeers extends Component {
    state = {
        beers: []
    }

    componentWillMount = () => {
        getAllBeers()
            .then(beers => {
                this.setState({ beers })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { beers } = this.state
        return (
            <div className="container">
                <Link className="btn btn-primary" to="/" style={{ width: '100%' }}> Home</Link>
                <div className="row">
                    {beers.map(beer => {
                        return (
                            <div className="col-lg-4 col-md-6" style={{ padding: 8, boxSizing: 'border-box' }}>
                                <div key={beer._id} className="card">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={beer.image_url} alt={beer.name} style={{ maxHeight: '200px' }} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-block">
                                                <h4 className="card-title">{beer.name}</h4>
                                                <p className="card-text">{beer.tagline}</p>
                                                <p className="card-text"><strong>Created by: </strong>{beer.contributed_by}</p>
                                                <Link to={`/single/${beer._id}`}>Ver detalle</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default AllBeers
