import React, { Component } from 'react'
import Header from "./Header"
import {Link} from 'react-router-dom'


export default function AllBeers(props) {


    let imgStyle = {
        height: "150px",
        selfAlign: "center",
    }

    let beerCard = {
        display: "flex",
        border: "2px solid black",
        margin: "10px 0px",
        padding: "10px",
        width: "370px",
    }


    let details = {
        marginLeft: "40px",
    }


    return (
        <>
                <Header />
                <h1>All Beers</h1>

                <input onChang placeholder="search a beer"></input>
                {/* !!! must finish bonus iteration !!! */}

                <div>

                {

                    props.beerList.map((beer) => {
                        return (

                                <div style={beerCard}>
                                    <img src={beer.image_url} alt="img" style={imgStyle}/>
                                    <div style={details}>
                                        <p>{beer.name}</p>
                                        <p>{beer.tagline}</p>
                                        <p><strong>Created by:</strong> {beer.contributed_by.includes("<") ? beer.contributed_by.substring(0, beer.contributed_by.indexOf('<')) : beer.contributed_by}</p>
                                        <Link to={`/beers/${beer._id}`}><p>More details</p></Link>

                                    </div>
                                   
                                </div>                                

                        )
                    })                   
                    

                }
                    

                </div>                
                
                
        </>
    )
}
