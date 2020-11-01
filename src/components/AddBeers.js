import React from 'react'
import {Form, Button} from 'react-bootstrap'

function AddBeers(props) {
    return (
        <div>
            <form onSubmit={props.onAdd}>
                <label>Name</label>
                <input name="name" type="text" placeholder="Enter Name"></input>

                <label>Tagline</label>
                <input name="tagline" type="text" placeholder="Enter tagline"></input>

                <label>Description</label>
                <input name="description" type="text" placeholder="Enter description"></input>

                <label>First Brewed</label>
                <input name="first_brewed" type="text" ></input>

                <label>Brewers Tip</label>
                <input name="brewers_tips" type="text" ></input>

                <label>Attenuation Level</label>
                <input name="attenuation_level" type="number" ></input>

                <label>Contributed by</label>
                <input name="contributed_by" type="text" ></input>

                <Button type="submit">Add Beer</Button>
            </form>
        </div>
    )
}
export default AddBeers