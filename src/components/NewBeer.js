import React from 'react'

export default function NewBeer(props) {

    return (
        <>
            <form onSubmit={props.onAdd}>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Indian Pale Ale" />
                </div>
                <div class="form-group">
                    <label for="tagline">Tagline</label>
                    <input type="text" class="form-control" id="tagline" placeholder="The best beer." />
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="description" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="firstBrewed">First Brewed</label>
                    <input type="text" class="form-control" id="firstBrewed" placeholder="1922" />
                </div>
                <div class="form-group">
                    <label for="brewerTips">Brewer Tips</label>
                    <input type="text" class="form-control" id="brewerTips" placeholder="Ferment at higher temperature." />
                </div>
                <div class="form-group">
                    <label for="attenuation">Attenuation Level</label>
                    <input type="number" class="form-control" id="attenuation" placeholder="81.3" />
                </div>
                <div class="form-group">
                    <label for="contributed">Contributed by</label>
                    <input type="text" class="form-control" id="contributed" placeholder="Sam Smith" />
                </div>
                <div>
                    <button class="btn btn-primary" type="submit">Add New</button>
                </div>
            </form>
        </>
    )
}