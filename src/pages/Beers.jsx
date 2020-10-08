import React, { Component } from 'react'
import beerApi from '../api/beerApi.js'
import { NavLink } from 'react-router-dom'


class Beers extends Component {

    state = {
        beers: [],
    }

    componentDidMount() {
        console.log('I love Mount(agne Russes)');

        beerApi.getBeers().then((apiRes) => {
            this.setState({
                beers: apiRes.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    componentDidUpdate() {
        console.log('I Update')
    }

    componentWillUnmount() {
        console.log('I Unmount');
    }


    render() {
        // console.log(this.state.beers)
        return (
            <div>
                <h1>All the beers</h1>
                {this.state.beers.map((each)=> (
                    <>
                    <img src={each.image_url} alt=""/>
                    <h2>{each.name}</h2>
                    <p>{each.tagline}</p>
                    <p>{each.contributed_by}</p>
                    <NavLink key={each.name} to={`/beer/${each._id}`}>See More About This Beer</NavLink><br />
                    </>
                ))}
            </div>
        )
    }
}


export default Beers
