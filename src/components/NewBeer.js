import React from 'react';
import Header from './Header.js';
import {Button} from  'react-bootstrap';


function NewBeer(props) {
    return (
        <div>
            <Header />
            <form onSubmit={props.onAdd}>
				<input  name="name"  type="text"  placeholder="Enter name"/>
                <input  name="tagline"  type="text"  placeholder="Enter tagline"/>
				<input  name="description"  type="text"  placeholder="Enter description"/>
				<input  name="first_brewed"  type="text"  placeholder="First brewed: mm/yyyy"/>
				<input  name="brewers_tips"  type="text"  placeholder="Brewers tips"/>
				<input  name="attenuation_level"  type="number"  placeholder="Attenuation level"/>
				<input  name="contributed_by"  type="text"  placeholder="Enter contributor"/>
				<Button  type="submit" >Submit</Button>
			</form>
        </div>
    )
}
export default NewBeer;