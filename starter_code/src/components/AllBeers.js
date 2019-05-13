import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './NavBar';

export default class AllBeers extends Component {
    state = {
        beers: []
    }

    componentDidMount() {
        axios
            .get('https://ih-beer-api.herokuapp.com/beers', {
                mode: 'no-cors'
            })
            .then(({ data }) => {
                this.setState({ beers: data })
            })
    }
    render() {
        const { beers } = this.state
        console.log(beers)
        return (
            <>
            <NavBar/>
            <div className="card-columns"> 
                {beers.map((e, i) => (
                    <div className="card" style={{width:'400px'}} key={i}>
                        <img className="card-img-top"  src={e.image_url} alt={e.name} style={{width:'60px'}} />
                        <div className="card-body" >
                            <h5 className="card-title" >{e.name}</h5>
                            <p className="card-text">{e.description}</p>
                        </div>
                    </div>
                ))
                }
            </div>
            </>
        )
    }
}

//https://ih-beer-api.herokuapp.com/beers