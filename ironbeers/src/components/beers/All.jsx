import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { all } from '../../services/beersApi'

export default class AllBeers extends Component {
    state = {
        beers: []
    }

    componentDidMount() {
        all()
            .then(beers => {
                this.setState({ beers })
            })
            .catch(e => console.log(e))
    }

    render() {
        const { beers } = this.state
        return (
            <div>
                <Link to='/'>
                    <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="other" width='100%' style={{
                        maxHeight: '100px'
                    }} />
                </Link>
                <p>{beers.map((beer, index) => {
                    return <div key={index}>
                        <div className="card-columns" style={{
                            margin: '30px',
                            display: 'flex',
                            flexDirection: 'row',
                            height: 'auto',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} >
                            <img style={{ width: "100px", maxHeight: '250px' }} className="card-img-top" src={beer.image_url} alt="Card cap" />
                            <div className="card-body">
                                <p className="card-text">
                                    <h2>{beer.name}</h2>
                                    <p>{beer.description}</p>
                                    <small>{beer.contributed_by}</small>
                                </p>
                            </div>
                        </div>
                        <hr />
                    </div>
                })}</p>
            </div>
        )
    }
}
