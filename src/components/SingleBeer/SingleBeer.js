import React from 'react'
import NavBar from '../NavBar/NavBar';

function SingleBeer(props) {
    let {id} = props.match.params
    let beerSelected = props.beers.find((beer) => {
        return beer._id === id
    })
    console.log(beerSelected)
    return (
        <div>
            <NavBar/>
            <div>
                <img style={{height: '300px'}} src={beerSelected.image_url} alt=""></img>
            </div>
        </div>
    )
}

export default SingleBeer;