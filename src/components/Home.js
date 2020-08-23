import React, { Component } from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import NewBeer from './NewBeer';
import BeerDetails from './BeerDetails';

class Home extends Component {

 
    render() {

        let containerHome={
            display:'flex',
            flexDirection:'column',
            
        };

        let imageStyle={
            width:'100%'
        };

        let styleP={
            paddingTop:'0', 
            paddingLeft:'20px', 
            paddingRight:'20px'
        }
        let styleHeader={
            paddingTop:'0',
            paddingLeft:'20px',
            paddingBottom:'0',
            paddingRight: "20px"
        }


        return (
            <div style={containerHome}>

                <div>
                    <Link to={'/Beers'}> <img style={imageStyle} src='/images/beerlist.jpg' alt='img'/> </Link>
                    <h2 style={styleHeader}>All Beers</h2>
                    <p style={styleP}>Here you can find a list with different beers, you can click on each one to display details about that specific beer. </p>

                </div>

                <div>
                    <Link to={'/random-beer'}> <img style={imageStyle} src="/images/randombeer.jpeg" alt='img'/> </Link>
                    <h2 style={styleHeader}>Random beer</h2>
                    <p style={styleP}> Are you indecisive? Just get a random beer from the list of all the beers </p>
                </div>

                <div>
                    <Link to={'/new-beer'}> <img style={imageStyle} src='/images/new-beer.jpeg' alt='img'/> </Link>
                    <h2 style={styleHeader}>New beer</h2>
                    <p style={styleP}> Are you missing your favorite beer? you can add it here! </p>
                </div>
            </div>
        )
    }
}
export default Home