import React from 'react'
import Header from '../Header/Header'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ListBeers extends React.Component {

    constructor() {
        super()
        this.state = {
            beers: []
        }

    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                this.setState({ beers: response.data })
            })
    }

    render() {

        return (
            <>
                <Header />
                <div className="App">
                    {this.state.beers.map((beer, idx) =>
                        <div key={idx}>
                            <img src={beer.image_url} alt="" />
                            <h4> {beer.name}</h4>
                            <p>{beer.tagline}</p>
                            <p>{beer.contributed_by}</p>
                            <Link to={`/beers/${beer._id}`}>Detalles</Link>
                        </div>
                    )}
                </div>
            </>
        );
    }


}


export default ListBeers