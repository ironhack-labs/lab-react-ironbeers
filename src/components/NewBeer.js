import React from 'react';
import Header from './Header'

function NewBeer (props) {
    return (
        <div>
            <Header />
            <form onSubmit={props.onSubmit}>

            <input type="text" placeholder="Introduce a beer name" name="name" ></input>
            <br></br>
            <input type="text" placeholder="Introduce a tagline" name="tagline"></input>
            <br></br>
            <input type="text" placeholder="Write your description here" name="description"></input>
            <br></br>
            <input type="text" placeholder="Insert first brewed date" name="first_brewed"></input>
            <br></br>
            <input type="text" placeholder="Insert brewers tips" name="brewers_tips"></input>
            <br></br>
            <input type="number" placeholder="Insert atenuation level" name="attenuation_level"></input>
            <br></br>
            <input type="text" placeholder="Insert contributed by" name="contributed_by"></input>
            <br></br>
            <button type="submit" >ADD NEW</button>
            </form>
        </div>       
    )

}

export default NewBeer