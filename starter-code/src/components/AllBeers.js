import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"; 

const STATUS = {
    LOADING: 'LOADING',
    LOADED: 'LOADED',
    ERROR: 'ERROR'
}


class Home extends Component {
    constructor() {
        super()
        this.state = {
            beers: [],
            status: '',
        }
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
            console.log(response.data);
            this.setState({
                beers:response.data,
                status: STATUS.LOADED
            })
        })
        .catch((error)=> {
          this.setState({
              error: error,
              status: STATUS.ERROR
          })  
        })
    }


    render() {
        const { beers, error, status } = this.state;

        switch (status) {
            case STATUS.LOADING:
                return <div>Loading</div>;
            case STATUS.LOADED:
                return beers.map((beer, index) => {
                    return (<div key={index}>
                    <Link className='beer-home' to={beer._id}>
                    <img src={beer.image_url} alt= 'beer'></img>
                    <p>{beer.name}</p>
                    </Link>
                    </div>)
                })
            case STATUS.ERROR:
                return <div>{error}</div>
            default:
                break;
        }
        
        return(
            <div>
                {this.status}
            </div>
        )
    }
}

export default Home;