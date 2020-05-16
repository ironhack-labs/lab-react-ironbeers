import React, { Component } from 'react'
import Header from './Header'
import { Route, Link, Switch } from 'react-router-dom'

export default class Beers extends Component {

    state = {
        beers: ''
    }

    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
          .then(res => res.json())
          .then(result => {
            console.log(result)
            this.setState({beers: result})
          })
          .catch(e => console.log(e))
    }

    handleQuery(e){
        // e.target.value
        console.log(e.target.value)
        fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
          .then(res => res.json())
          .then(result => {
            // console.log(result)
            this.setState({beers: result})
          })
          .catch(e => console.log(e))
    }

    render() {
        return (
            <div>
                <Header />
                <input type="text" onChange={(e)=> this.handleQuery(e)} />
                {this.state.beers === '' ? 'Beers are loading' : 
                this.state.beers.map((beer, index) => (
                    <div key={index}>
                    <Link className="link-none" to={"/" + beer._id}>
                        <img className="width-50" src={beer.image_url} alt="" />
                        <h2>{beer.name}</h2>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                    </Link>
                    </div>
                ))
                
                }

            </div>
        )
    }
}
