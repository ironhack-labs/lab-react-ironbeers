import React, { Component } from 'react'
import BeerItem from './BeerItem'
import Header from './Header'

class AllBeers extends Component {
    render() {
        return (
            <div>
                <Header />
                {
                    this.props.beers.map((elem, index) =>{
                        return <BeerItem beers={elem} id={index}/>
                    })
                }
            </div>
        )
    }
}


export default AllBeers
