import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import home from '../assets/home button.png'

class NewBeer extends Component {
    render() {
        return (
            <div>
                <Link to={'/'}><img src={home} alt="" style={{width: '500px'}}/></Link> 
                <form onSubmit={this.props.onAdd}>
                    <input type="text" name="name" placeholder="Name"/>
                    <br />
                    <input type="text" name="tagline" placeholder="Tagline"/>
                    <br />
                    <br />
                    <textarea type="text" name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>
                    <br />
                    <input type="text" name="first_brewed" placeholder="First Brewed"/>
                    <br />
                    <input type="text" name="brewers_tips" placeholder="Brewers Tips"/>
                    <br />
                    <input type="number" name="attenuation_level" placeholder="Attenuation Level"/>
                    <br />
                    <input type="text" name="contributed_by" placeholder="Contributed By"/>
                    <br />
                    <button type="submit">Add New</button>
                </form>
            </div>
        )
    }
}

export default NewBeer
