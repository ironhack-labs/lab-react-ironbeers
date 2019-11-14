import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component {

    randomBeer = () =>{
        let beerArray = this.props.beers.map((each)=>{
            return each._id
        })
        return beerArray[Math.floor(Math.random()*beerArray.length)]
    }

    render() {


        return (
            <div className="whole">
                <div className="all-beers whole-containers">
                    <img src={require('./images/beers.png')} className="beer-imgs" alt="all"/>
                    <Link to={'/all/'} className="allbeer-link">All Beers</Link>
                    <p>Look at all the beers</p>
                </div>
                <div className="random-beer whole-containers">
                    <img src={require('./images/random-beer.png')} className="beer-imgs" alt="random"/>
                    <Link to={'/beer/' + this.randomBeer()} className="allbeer-link">Random Beer</Link>
                    <p>Find a random beer</p>
                </div>
                <div className="new-beer whole-containers">
                    <img src={require('./images/new-beer.png')} className="beer-imgs" alt="new"/>
                    <Link to={'/newbeer'} className="allbeer-link">New Beers</Link>
                    <p>Input a new beer</p>
                </div>
            </div>
        )
    }
}
