import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AllBeers extends React.Component {
    state = {
        allBeers: null,
        searchValue: ""
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(res => this.setState({allBeers: res.data}))
        .catch(err => console.log(err))
    }

    handleSearchChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }

    componentDidUpdate(prevProps, prevState) {
        const {searchValue} = this.state;
        if(prevState.searchValue !== searchValue) {
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchValue}`)
            .then(res => this.setState({allBeers : res.data}))
            .catch(err => console.log(err));
        };
    }

    render() {
        const {allBeers} = this.state;
        const uniqueArr = [];
        if(allBeers) {
            allBeers.map(beer => 
                uniqueArr.filter(elem => elem.name === beer.name).length > 0 ? null : uniqueArr.push(beer));
        }

        return (
            <div className="AllBeers">
                <input 
                    value={this.state.searchValue}
                    name="searchValue"
                    onChange={this.handleSearchChange}
                    placeholder="search the perfect beer"
                    type="text"
                />
                {uniqueArr && uniqueArr.map(beer => 
                <div className="beer-all-beers" key={beer._id}>
                    <div className="img-container">
                        <img src={beer.image_url} alt=""/>
                    </div>
                    <aside>
                        <h2>{beer.name}</h2>
                        <p>{beer.tagline}</p>
                        <p><b>Created by : </b>{beer.contributed_by}</p>
                        <Link to={`/beers/${beer._id}`}>Check it</Link>
                    </aside>
                    
                </div>
                )}
            </div>
        )
    }
}

export default AllBeers
