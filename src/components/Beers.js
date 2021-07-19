import React, { Component } from 'react'

import axios from 'axios'

import {useState} from 'react' ;
import {Link} from 'react-router-dom'


function Beers({routeProps, list , beersClickEvent}) {
     
    // console.log('is beers function runnin? and list is passed from route in app.js' , list )

    
    return ( 
        <>   
            {
                list.map((singleBeer, i) => {        

                    return <p key={i}>
                                <h1>{singleBeer.image_url}
                                    {singleBeer.name}
                                    {singleBeer.tagline}    
                                    {singleBeer.contributed_by}
                                </h1>
                            {/* <Link to={`/beers/${_id}`}>{singleBeer.name}{singleBeer.tagline}{singleBeer.image}{singleBeer.contributed_by}</Link> */}
                         </p>                            
                })                
            }
        </>
    )

    
}

            
export default Beers