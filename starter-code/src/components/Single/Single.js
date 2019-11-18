import React from 'react'

function Single(props) {
    // console.log(props.listOfBeers)
    let theBeer = props.listOfBeers.find(beer => {
        return beer._id === props.match.params.id
    })

        return (
            <div>
                
                <h1>{theBeer.name}</h1> 
            </div>
        )
    
}
export default Single;