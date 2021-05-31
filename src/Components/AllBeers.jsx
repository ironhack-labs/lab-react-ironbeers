import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from './Header'

class AllBeers extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => {
                this.setState({
                    beers: res.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }


    render() {
        return (
            <div>
                <Header />
                <p>All Beer Component !</p>

                {this.state.beers.map((beer, index) => {
                    return (
                        <div key={index}>
                            <img src={beer.image_url} style={{
                                height: 120
                            }} />
                            <h2>{beer.name}</h2>
                            <h4>{beer.tagline}</h4>
                            <p>{beer.contributed_by}</p>
                            <Link
                                key={index} to={`/details/${beer.name}`}
                            >See mor</Link>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default AllBeers