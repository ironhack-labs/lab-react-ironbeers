import React from 'react'

export default function Beer(props) {
    return(
        <div className={'card'}>
            <h4 className={'card__title'}>{props.singleBeer.name}</h4>
            <img src={props.singleBeer.image_url} alt='One Good Beer' className={'card__picture'}/>
            <p className={'card__desc'}>{props.singleBeer.tagline}</p>
            <p className={'card__author'}>Created by:{props.singleBeer.contributed_by}</p>
        </div>
    )
}