import React from 'react'
import HeaderNav from '../components/HeaderNav'

function NewBeerForm() {

    return (
        <div>
            <HeaderNav/>
            <div>
                <form action="">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Name" name="name"/>
                    <label htmlFor="Tagline">Tagline</label>
                    <input type="text" placeholder="Tagline" name="tagline"/>
                    <label htmlFor="Description">Description</label>
                    <textarea name="description" placeholder="Description..." cols="30" rows="10"></textarea>
                    <label htmlFor="brewed">First Brewed</label>
                    <input type="text" placeholder="first_brewed" name="first_brewed"/>
                    <label htmlFor="brewer_tips">Brewer Tips</label>
                    <input type="text" name="brewer_tips"/>
                    <label htmlFor="name">Attenuation Level</label>
                    <input type="text" name="attenuation_level"/>
                    <label htmlFor="name">Contributed By</label>
                    <input type="text" name="contributed_by"/>
                    <input type="submit" value="ADD NEW"/>
                </form>
            </div>
        </div>
    )
}


export default NewBeerForm