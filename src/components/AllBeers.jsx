import React from 'react'
import axios from 'axios'
const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers'

export default class AllBeers extends React.Component {

    state = {
        beers: [],
        search: ''
    }

    componentDidMount() {
        axios
            .get(apiUrl)
            .then(response => {
                console.log(response.data)
                this.setState({
                    beers: response.data
                })
            })
            .catch(error => console.log(error))
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

        let query = this.state.search

        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
        .then(res => {
            this.setState({
                beers: res.data
            })
        })
        .catch(error => console.log(error))
    }


    render() {
        return (
            <>
                <div className="form-group">
                    <label htmlFor="search">Beer search</label>
                    <input type="text" className="form-control" id="search" aria-describedby="search" placeholder="Enter beer search" name="search" onChange={(e) => this.handleChange(e)} value={this.state.search} />
                </div>
                {this.state.beers.map((beer) =>
                    <a href={`/beers/${beer._id}`}>
                        <img src={beer.image_url} alt="beer" />
                        <p>{beer.name}</p>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                        <hr />
                    </a>
                )}
            </>
        )
    }
}

