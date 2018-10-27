import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


class BeerTag extends Component {
    render() {
        return (
            <div className="beer-list">
                <Link to={`/beer/${this.props.id}`}>
                <div><img src={this.props.imageurl} alt=""></img></div>
                <div> <h1>{this.props.name}</h1>
                    <h4>{this.props.tagline}</h4>
                    <h5>Created by:{this.props.name} </h5>
                </div>
                </Link>
            </div>
        )
    }
}

class Allbeers extends Component {
    constructor(props) {
        super(props)
        this.state = { listBeers: [], searchBeer:""}
    }

    getAllBeers() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/all")
            .then(response => {
                this.setState({ listBeers: response.data })

            }
            )
    }

    componentDidMount() {
        this.getAllBeers();
    }

    handleChange(event){
        this.setState({searchBeer:event.target.value})
        axios.get(`https://ironbeer-api.herokuapp.com/beers/search?q=${this.state.searchBeer}`)
        .then(response => {
            this.setState({ listBeers: response.data })

        }
        )

    }

    render() {
        return (
            <div>
                <header className="header-component">
                    <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymKW7blR5IoWJz4L9BuXeng1G3jPF3F-M1eQ7mQURgnsHm42d" alt="home-img"></img></Link>
                </header>
                <div>
                    <label>Search for a beer</label>
                    <input type='text' name="searchBeer" value={this.state.searchBeer} onChange={e=>this.handleChange(e)}/>
                </div>
                <div >
                    {
                        this.state.listBeers.map(beer => {
                            return (
                                <BeerTag id={beer._id} key={beer["_id"]} imageurl={beer['image_url']} name={beer.name} tagline={beer.tagline}></BeerTag>
                            )
                        }
                        )
                    }
                </div>

            </div>

        )
    }
}


export default Allbeers;
