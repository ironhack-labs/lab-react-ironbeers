import React, { Component } from 'react'
import Nav from './Nav'
import BeerCard from './BeerCard'

export default class Beers extends Component {
    render() {
        console.log(this.props.beerslist)
        return (
            <div>
                <Nav />
                <h3>Lista de Cervezas</h3>
                {
                    this.props.beerslist.map((e, i) => {
                        return <BeerCard detail={e} key={i} />
                    })
                }
                
            </div>
        )
    }
}
