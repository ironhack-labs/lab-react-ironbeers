import React, { Component } from 'react'
import Header from './components/Header'


class CoasterList extends Component {

    constructor() {
        super()
        this.state = { beers: [] }
       
    }

    render() {

        return (
            <>
                <div className="container">

                    <h1>All Beers</h1>

                    <div className="row coasters-list">

                        {this.state.coasters.map(coaster => <CoasterCard key={coaster._id} {...coaster} />)}

                    </div>
                </div>
            </>
        )
    }
}


export default CoasterList

   
