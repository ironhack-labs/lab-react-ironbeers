import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header'


 function AllBeers(props) {

    let imageStyle={
        width:'75px',
        padding:'20px'
    }

    let container={
        display:'flex',
        alignItems:'center',
    }
    let info ={
        paddingRight:'20px'
    }
    let tagLine ={
        color:'grey',
        fontSize:'20px'
    }
    let contributedBy={
        fontSize:'10px'
    }

    return (
        <div>
            <Header/>
            {
                props.beers.map((beer)=>{
                    return (

                    <div>
                        <div style={container}>
                            <div>
                            <Link to={`/beers/${beer._id}/details`}><img src={beer.image_url} style={imageStyle} alt ='img'/></Link>
                            </div>
                            <div style={info}>
                            <h3>{beer.name}</h3>
                            <p style={tagLine}>{beer.tagline}</p>
                            <p style={contributedBy}><strong>Created by: </strong>{beer.contributed_by}</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    )
                    
                })
            }
        </div>
    )
}

export default AllBeers