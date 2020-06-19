import React from 'react';
import Header from './Header';


export default function NewBeer(props) {

    return (
        <div>
            <Header />
            <h1>Add New Beer</h1>

            <form onSubmit={props.onAdd}>
                <div class="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" class="form-control" name="name" id="name" />
                </div>
                <div class="form-group">
                    <label htmlFor="description">Tagline</label>
                    <input type="text" class="form-control" name="tagline" id="tagline" />
                </div>
                <div class="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" class="form-control" name="description" id="description" />
                </div>
                <div class="form-group">
                    <label htmlFor="description">First Brewed</label>
                    <input type="text" class="form-control" name="firstBrewed" id="firstBrewed" />
                </div>
                <div class="form-group">
                    <label htmlFor="description">Brewers Tips</label>
                    <input type="text" class="form-control" name="brewersTips" id="brewersTips" />
                </div>
                <div class="form-group">
                    <label htmlFor="description">Attenuation Level</label>
                    <input type="number" class="form-control" name="attenuationLevel" id="attenuationLevel" />
                </div>
                <div class="form-group">
                    <label htmlFor="description">Contributed By</label>
                    <input type="text" class="form-control" name="contributedBy" id="contributedBy" />
                </div>
                <button type="submit" class="btn btn-primary">Create</button>
            </form>

            
        </div>
    )
}