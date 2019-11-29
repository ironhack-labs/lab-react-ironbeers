import React, { Component } from 'react'

export default class NewBeer extends Component {
    render() {
        return (
            <div>
                <div>
               <form action='https://ih-beers-api2.herokuapp.com/beers/new' method="POST" >

<label htmlFor="name">Name</label>
<input type="text" name='name' id='name'/>

<label htmlFor="tagline">Tagline</label>
<input type="text" name='tagline' id='tagline'/>

<label htmlFor="description">Description</label>
<input type="text" name='description' id='description'/>

<label htmlFor="firstbrewed">First Brewed</label>
<input type="text" name='firstbrewed' id='firstbrewed'/>

<label htmlFor="attlevel">Attenuation Level</label>
<input type="number" name='attlevel' id='attlevel'/>

<label htmlFor="contribby">Contributed By</label>
<input type="text" name='contribby' id='contribby'/>
<button type="submit">Add new</button>
               </form>
               </div>
            </div>
        )
    }
}
