import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
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
            <div className="row justify-content-center">
                <h1 className="title"><strong>All</strong> beers</h1>
                <div className="col-12">
                    <div className="form-group search-input">
                        <label htmlFor="search">Beer search</label>
                        <input type="text" className="form-control" id="search" aria-describedby="search" placeholder="Enter beer search" name="search" onChange={(e) => this.handleChange(e)} value={this.state.search} />
                    </div>
                </div>
                {this.state.beers.map((beer) =>
                    <div className="col-12 col-sm-3 mb-4">
                        <div className="card">
                            <NavLink to={`/beers/${beer._id}`} className="card-header">
                                <div className="card-pic" style={{background: `url(${beer.image_url}) no-repeat center center / contain`}}></div>
                            </NavLink>
                            <div className=" card-body">
                                <h5 className="card-title">{beer.name} <br/>
                                <small className="tagline">{beer.tagline}</small></h5>
                                <p className="card-text">@{beer.contributed_by.replace('<', '').replace('>', '').split(' ').splice(-1)}</p>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </>
        )
    }
}

