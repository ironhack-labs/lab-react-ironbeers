import React from 'react'
import {Link} from 'react-router-dom'
 
export default function HomePage(){


    return(
        <>  <div>
            <Link to='/beers'>beers</Link>
            </div>
            <div>
            <Link to='/random-beer'>random-beer</Link>
            </div>
            <div>
            <Link to='/new-beer'>new-beer</Link>
            </div>
            
        </>
    )
}

