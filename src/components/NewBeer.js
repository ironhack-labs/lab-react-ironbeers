import React, { Component } from 'react'
import axios from 'axios'

export default class NewBeer extends Component {

    postBeerData = () => {
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new').then((res) => {
          const beers = res.data;
          console.log(beers);
        });
      };
 
    render() {
        return (
            <div>
                <form action="https://ih-beers-api2.herokuapp.com/beers/new" method='POST'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"/>
                    <br/>
                    <label htmlFor="tagline">Tagline</label>
                    <input type="text" name="tagline" id="tagline"/>
                    <br/>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description"/>
                    <br/>
                    <label htmlFor="firstBrewed">First Brewed</label>
                    <input type="text" name="firstBrewed" id="firstBrewed"/>
                    <br/>
                    <label htmlFor="brewersTips">Brewers Tips</label>
                    <input type="text" name="brewersTips" id="brewersTips"/>
                    <br/>
                    <label htmlFor="attenuationLevel">Attenuation Level</label>
                    <input type="number" name="attenuationLevel" id="attenuationLevel"/>
                    <br/>
                    <label htmlFor="contributedBy">Contributed By</label>
                    <input type="text" name="contributedBy" id="contributedBy"/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
