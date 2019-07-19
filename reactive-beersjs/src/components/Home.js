import React , {Component} from 'react'
import BeerImg from '../img/beers.png'
import RandomBeer from '../img/random-beer.png' 
import NewBeerImg from '../img/new-beer.png'
import {Link} from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div>
                
                    <h1>IronBeers</h1>
                    <div>
                    <Link to ='/beer_list'>
                    <img src ={BeerImg} alt ="beers" />   
                        <h2>All Beers</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Necessitatibus libero fuga, harum repellendus, 
                            quidem odit alias assumenda culpa similique aspernatur voluptatem
                             impedit neque, autem voluptas ad tempora voluptatum illo natus?</p>
                    </Link> 
                    </div>
                    <div>
                    <Link to ='/random'>
                    <img src ={RandomBeer} alt ="beers" />   
                        <h2>Random Beer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Necessitatibus libero fuga, harum repellendus, 
                            quidem odit alias assumenda culpa similique aspernatur voluptatem
                             impedit neque, autem voluptas ad tempora voluptatum illo natus?</p>
                    </Link> 
                    </div>
                    <div>
                    <Link to ='/new'>
                    <img src ={NewBeerImg} alt ="beers" />   
                        <h2>New Beer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Necessitatibus libero fuga, harum repellendus, 
                            quidem odit alias assumenda culpa similique aspernatur voluptatem
                             impedit neque, autem voluptas ad tempora voluptatum illo natus?</p>
                    </Link> 
                 </div>
             </div>
        )
    }
}
