import React from 'react'
const SingleBeer = (props) => {
    //console.log("PROPS", props.beers)
    //console.log("PARAMS", props.match.params)
    const singleBeer = props.beers.filter((singleBeer) => { return props.match.params.id === singleBeer._id })
    //another ethod to do it const singleBeer = props.beers.find((singleBeer) => { return props.match.params.id === singleBeer._id })
    // in this case we need to do and if statement "no beer found" and then we don't need the [0] tags and then we can reach the name.
    //console.log(singleBeer[0].name)
    return (
        <div>
            <h1>SingleBeer Page</h1>
            <p>{singleBeer[0].name}</p>
        </div>
    )
}
export default SingleBeer