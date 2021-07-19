import React, { Component } from  'react'
import {Button} from  'react-bootstrap'


class NewBeer extends Component {

  
    
	render() {
		return (
			<form onSubmit={this.props.onAdd}  >
				<input  name="name"  type="text" />
        <input  name="tagline"  type="text"  />
				<input  name="description"  type="text"/>
        <input  name="first_brewed"  type="text" />
        <input  name="brewers_tips"  type="text"  />
				<input  name="attenuation_level"  type="text"/>
        <input  name="contributed_by"  type="text"/>
				<Button  type="submit"  >Submit</Button>
			</form>
		)
	}
}

export default NewBeer
