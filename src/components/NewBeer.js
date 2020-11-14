import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
    }

    // abstraemos los handlers de más arriba por uno sólo
    handleChange = event => {
        // desestructuramos el name y el value de event.target
        let { name, value } = event.target
        // comprobamos si el name coincide con "hasOscars" que es el input de tipo checkbox
        // usamos [] para configurar la key del objeto state con el value
        this.setState({ [name]: value})
    }

    handleFormSubmit = event => {
        // previene el comportamiento por default del formulario (recargar la página)
        event.preventDefault();
        // llamamos al método pasado desde DynamicMoviesList como prop y le pasamos el objeto del state con la nueva película
        this.props.addTheBeer(this.state);
        console.log(this.state, 'the information of the beer')
        // limpiamos los campos del formulario
        this.setState({
            name: '',
            tagline: '',
            description: '',
        })
    }

    render() {
        return (
            <div className="theContainer">  
                <h1>Add your favourite beer to the collection</h1>  
                <form onSubmit={this.handleFormSubmit} className="theForm">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name"  value={this.state.name} onChange={(e) => this.handleChange(e)}/>
                    
                    <label htmlFor="">Tagline:</label>
                    <input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)}/>

                    <label htmlFor="">Description:</label>
                    <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)}/>

                    <input type="submit" value="Submit"/>
                </form>
                <Link to={'/'}>Back to the home page</Link>
            </div>
        );
    }
}

export default NewBeer;