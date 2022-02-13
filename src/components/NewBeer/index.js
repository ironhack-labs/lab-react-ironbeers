import React from "react";
import "./NewBeer.css";

export default function NewBeer() {

    return (
        <div className="new-beer">
            <div className="new-beer-card">
                <h1>New Beer</h1>
                <form>
                    <label>Name</label>
                    <input type="text" name="name" />
                    <label>Tagline</label>
                    <input type="text" name="tagline" />
                    <label>First Brewed</label>
                    <input type="text" name="first_brewed" />
                    <label>Description</label>
                    <input type="text" name="description" />
                    <label>Contributed By</label>
                    <input type="text" name="contributed_by" />
                    <label>Image URL</label>
                    <input type="text" name="image_url" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}