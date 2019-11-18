import React from 'react'

function Random(props) {
    
    let randomNumber = Math.floor(Math.random()*props.listOfBeers.length)

    let theBeer = props.listOfBeers[randomNumber]
        
    // console.log(theBeer)
        return (
            <div>
                
                <h1>{theBeer.name}</h1> 
            </div>
        )
    
}
export default Random;
