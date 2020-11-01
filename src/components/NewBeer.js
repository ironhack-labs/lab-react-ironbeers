import React from 'react'

export default function NewBeer(props) {
    return (
        <div>
        <form onSubmit={props.onAdd}>
        <input className="form-control" name ="name" type="text" placeholder="Beer name"/>
        <input className="form-control" name ="tagline" type="text" placeholder="Tagline"/>
        <input className="form-control" name ="decription" type="text" placeholder="Decription"/>
        <input className="form-control" name ="firstBrewed" type="text" placeholder="First Brewed"/>
        <input className="form-control" name ="brewersTips" type="text" placeholder="Brewers Tips"/>
        <input className="form-control" name ="attenuationLevel" type="number" placeholder="Attenuation Level"/>
        <input className="form-control" name ="contributedBy" type="text" placeholder="Contributed By"/>

        <button type="submit">Submit</button>
        </form>
        </div>
    )
}
