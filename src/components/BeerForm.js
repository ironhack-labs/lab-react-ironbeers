import React from 'react';

export const BeerForm = () => {

    return (
        <>
            <div className="beer-form">
                <form action="https://ih-beers-api2.herokuapp.com/beers/new" method="POST">
                    <label htmlFor="name">Name:</label>
                    <input name="name" type="text"/>

                    <label htmlFor="name">tagline:</label>
                    <input name="tagline" type="text"/>

                    <label htmlFor="description">Description:</label>
                    <textarea name="description"></textarea>

                    <label htmlFor="first_brewed">First brewed:</label>
                    <input name="first_brewed" type="text"/>

                    <label htmlFor="brewers_tips">Brewers tips:</label>
                    <input name="brewers_tips" type="text"/>

                    <label htmlFor="attenuation_level">Attenuation level:</label>
                    <input name="attenuation_level" type="number"
                    />

                    <label htmlFor="contributed_by">Contributed by:</label>
                    <input name="contributed_by" type="text"/>
                    <br/>{' '}
                    <button type="submit">Add new Beer</button>
                </form>
            </div>
        </>
    );
}