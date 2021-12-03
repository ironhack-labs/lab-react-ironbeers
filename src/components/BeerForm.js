import React, {useState} from 'react';
import axios from "axios";

export const BeerForm = () => {
    const [newBeer, setNewBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '',
    })

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="beer-form">
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">Name:</label>
                    <input name="name" type="text" value={newBeer.name}
                           onChange={e => setNewBeer({...newBeer, name: e.target.value})}/>

                    <label htmlFor="tagline">tagline:</label>
                    <input name="tagline" type="text" value={newBeer.tagline}
                           onChange={e => setNewBeer({...newBeer, tagline: e.target.value})}/>

                    <label htmlFor="description">Description:</label>
                    <textarea defaultValue={newBeer.description} name="description"
                              onChange={e => setNewBeer({
                                  ...newBeer,
                                  description: e.target.value
                              })}></textarea>

                    <label htmlFor="first_brewed">First brewed:</label>
                    <input name="first_brewed" type="text" value={newBeer.first_brewed}
                           onChange={e => setNewBeer({...newBeer, first_brewed: e.target.value})}/>

                    <label htmlFor="brewers_tips">Brewers tips:</label>
                    <input name="brewers_tips" type="text" value={newBeer.brewers_tips}
                           onChange={e => setNewBeer({...newBeer, brewers_tips: e.target.value})}/>

                    <label htmlFor="attenuation_level">Attenuation level:</label>
                    <input name="attenuation_level" type="number" value={newBeer.attenuation_level}
                           onChange={e => setNewBeer({...newBeer, attenuation_level: +e.target.value})}/>

                    <label htmlFor="contributed_by">Contributed by:</label>
                    <input name="contributed_by" type="text" value={newBeer.contributed_by}
                           onChange={e => setNewBeer({...newBeer, contributed_by: e.target.value})}/>
                    <br/>
                    <button type="submit">Add new Beer</button>
                </form>
            </div>
        </>
    );
}