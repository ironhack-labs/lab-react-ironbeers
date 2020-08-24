import React from 'react'
import {Link} from 'react-router-dom'

export default function AllBeers(props) {
  return (
    <div>
      <Link to='/'> <img style={{width: '100%'}} src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' alt='home button'/> </Link>
      {
                props.beers.map((beer, i) => {
                    return (
                      <>
                        <Link key={'beer'+i} to={`/beers/${beer._id}`}><img style={{height: '200px'}}  src={beer.image_url} alt={beer.name}/></Link>
                        <p><b>{beer.name}</b></p>
                        <p>{beer.tagline}</p>
                        <p>Contributed by: {beer.contributed_by}</p>
                      </>
                    )                    
                })
            }


    </div>
  )
}
