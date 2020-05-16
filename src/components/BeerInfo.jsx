import React from 'react'
import Beer from "./Beer";

export default function BeerInfo(props) {
  console.log("here guys", props)

  let beer = props.beers.find(item => item._id === props.match.params.id)

  if(!beer){
    return <h1>loading</h1>
  }
    return (
        <div>
            <Beer {...beer}/>
        </div>
    )
}