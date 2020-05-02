import React, { Component } from 'react';

class CreateForm extends Component {
    render() {
        return(
            <form>
                <div className="mt-1">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>

                <div className="mt-1">
                    <label htmlFor="tagline">Tagline</label>
                    <input type="text" name="tagline" />
                </div>

                <div className="mt-1">
                    <label htmlFor="tagline">Description</label>
                    <input type="text" name="tagline" />
                </div>

                <div className="mt-1">
                    <label htmlFor="brewed">First Brewed</label>
                    <input type="text" name="brewed" />
                </div>

                <div className="mt-1">
                    <label htmlFor="attenuation">Attenuation</label>
                    <input type="number" name="attenuation" />
                </div>

                <button className="pt-1_5 pb-1_5 background-primary br-6 text-center no-decoration w-100 mt-1">Create</button>
            </form>
        )
    }
}

export default CreateForm;