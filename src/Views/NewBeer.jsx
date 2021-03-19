import React, { Component } from 'react'
import NavBar from './NavBar'

export class NewBeer extends Component {
    render() {
        return (
            <div>
                <NavBar/>
<div >
    <form className="form" style={{display: 'flex', flexDirection:'column', margin: 40}}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name"/>
        <label htmlFor="tagline">Tagline</label>
        <input type="text" name="tagline"/>
        <label htmlFor="description">Description</label>
        <input type="text-area" name="description"/>
        <label htmlFor="firstBrewed">First Brewed</label>
        <input type="text" name="firstBrewed"/>
        <label htmlFor="brewerTips">Brewers Tips</label>
        <input type="text" name="brewerTips"/>
        <label htmlFor="attenuationLevel">Attenuation Level</label>
        <input type="text" name="attenuationLevel"/>
        <label htmlFor="contribution">Contributed By</label>
        <input type="text" name="contribution"/>
        <button>ADD NEW</button>
    </form>
</div>

            </div>
        )
    }
}

export default NewBeer
