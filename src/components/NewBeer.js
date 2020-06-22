import React from 'react';

export default function NewBeer(props) {
    return (
        <div>
            <form style={{backgroundColor: "white"}}>
                <div class="form-group" onSubmit={props.onAdd} >
                    <label for="formGroupExampleInput">Name</label>
                    <input type="text" class="form-control" name="name" id="name" placeholder="Name"></input>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Tagline</label>
                    <input type="text" class="form-control" name="tagline" id="tagline" placeholder="Tagline"></input>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Description</label>
                    <input type="text" class="form-control" id="description" name="description"placeholder="Description"></input>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">First Brewed</label>
                    <input type="text" class="form-control" id="first_brewed" name="first_brewed" placeholder="First brewed"></input>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Brewers Tips</label>
                    <input type="text" class="form-control" id="brewers_tips" name="brewers_tips" placeholder="Brewers Tips"></input>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Attenuation Level</label>
                    <input type="text" class="form-control" id="attenuation_level" name="attenuation_level" placeholder="Attenuation Level"></input>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Contributed By</label>
                    <input type="text" class="form-control" id="contributed_by" name="contributed_by" placeholder="Contributed By"></input>
                </div>
                <button type="submit" className="btn btn-info">Create</button>
            </form>

        </div>
    );
}
