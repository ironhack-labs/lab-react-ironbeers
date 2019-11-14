import React from 'react'

export default function Beer(props) {

    let theBeer = props.beers.find((each)=>{
        return each._id == props.match.params.id;
    })

    console.log(props.beers, theBeer)

        return (
            <div>
                {theBeer.name}
            </div>
        )
    
}