import React from 'react';



function NewBeer(props) {
  console.log('here i am props: ', props)
  return (
    <div className="App">
        
        <h3 style={{color: 'gray'}}>In NEW beer page</h3>
        <form onSubmit={props.onAdd}>
            <input name="name" type="text" placeholder="Enter name"></input>
            <input name="tagline"  type="text" placeholder="Enter tagline"></input>
            <input name="description" type="text" placeholder="Enter description"></input>
            <input name="first_brewed"  type="text" placeholder="Enter first_brewed"></input>
            <input name="brewers_tips" type="text" placeholder="Enter brewers_tips"></input>
            <input name="attenuation_level"  type="number" placeholder="Enter attenuation_level"></input>
            <input name="contributed_by" type="text" placeholder="Enter contributed_by"></input>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default NewBeer