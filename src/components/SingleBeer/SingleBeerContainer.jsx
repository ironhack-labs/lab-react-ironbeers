import React from 'react'
import HeaderNav from '../HeaderNav'

function SingleBeerContainer(props) {

    const beerId = props.match.params.id

    console.log(beerId)


    return (
        <div>
            <HeaderNav/>
            SingleBeerContainer
        </div>
    )
}

export default SingleBeerContainer
