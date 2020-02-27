import React from 'react'

const BeerCard = props => {
    return (
        <div className='beerCard'>
            <figure><img src={ props.img } alt={ props.title } /></figure>
            <div>

            </div>
        </div>
    )
}

export default BeerCard