import React, { Component } from 'react'
import Axios from 'axios'
import Header from '../Header/Header'



class BeerDetail extends Component {

    state = {
        beer: {}
    }

    componentDidMount() {
        Axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
            .then(beer => {
                this.setState({ beer:beer.data })
            })
            .catch(e => console.log(e))
    }

    render() {
        const { beer } = this.state

        return (
            <div className="">
                <Header />
                <div className="card" style={{width: "10rem"}}>
                    <img src={beer.image_url} className="card-img-top" alt={beer.name} />
                    <div className="card-body">
                        <div className="">
                            <h2 className="card-title">{beer.name}</h2>
                        </div>
                        <div className="">
                            <h5 className="card-title">{beer.tagline}</h5>
                            <p className="card-text">{beer.first_brewed}</p>
                        </div>
                        <div className="">
                            <p>{beer.description}</p>
                            <p>{beer.contribuited_by}</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }


}

export default BeerDetail
