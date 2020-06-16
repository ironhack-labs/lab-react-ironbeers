import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import OneBeer from './OneBeer'
import Header from './Header'
import SearchBar from '../components/SearchBar';



class AllBeers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
            console.log(response.data)
            this.setState({
                beers: response.data
            })
        })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
      }

    render() {
        const { beers, searchfield } = this.state;
        const filteredBeers = beers.filter(beer =>{
            return beer.name.toLowerCase().includes(searchfield.toLowerCase());
          })

        return (
            <div>
                <div>
                    <Header />
                    <SearchBar searchChange={this.onSearchChange}/>
                </div>
                <div>
                    <ul>
                        {
                            filteredBeers.length > 0
                                ? filteredBeers.map((b) => <li><Link to={"/beers/" + b._id}> <OneBeer beer={b} key={b._id}></OneBeer></Link></li>)
                                : "No results :("
                        }
                    </ul>
                </div>
            </div>
        )

    }
}

export default AllBeers;

