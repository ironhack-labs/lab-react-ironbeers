import React, { Component } from 'react'
import Navbar from './Nabvar'
import Beer from "./Beer"

class AllBeers extends Component {
    constructor() {
        super()
        this.state = { 
            allBeers: []
        }
    }
 
    componentDidMount() {
        const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers'
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => this.setState({allBeers: data}))
        
    }
    render() {
        
        return (
            <>
                <Navbar />
                <div className="contaier-flex">
                    <div className="row">
                        <div className="col-sm-6">
                            {this.state.allBeers.map(elm => <Beer key={elm._id} {...elm} />)}
                            
                        </div>
                    </div>
                </div>
            
            </>
        )
    }
    }
export default AllBeers