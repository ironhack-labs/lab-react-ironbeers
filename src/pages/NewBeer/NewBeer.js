import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import './NewBeer.css';

class NewBeer extends Component {
  //definimos nuestro constructor con props (no es necesario)
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  // definimos la función 'handleFormSubmit' para manipular el submit del formulario:
  handleFormSubmit = (event) => {
    event.preventDefault();
    // 2do - definimos las variables que necesitamos para obtener los valores del state (title y description)
    const name = this.state.name;
    const tagline = this.state.tagline;
    const description = this.state.description;
    const first_brewed = this.state.first_brewed;
    const brewers_tips = this.state.brewers_tips;
    const attenuation_level = this.state.attenuation_level;
    const contributed_by = this.state.contributed_by;

    // 3ro - utilizamos axios, y su método "post" para conectar con nuestra ruta del backend que crea un nuevo project. Le pasamos un objeto con las dos variables antes creadas.
    axios
      .post('https://api.punkapi.com/v2/beers', {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      })
      .then(() => {
        // this.props.getData()  <--- dejamos esta linea comentada por ahora (tendrá sentido muy pronto ^^)
        this.setState({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: 0,
          contributed_by: '',
        });
      })
      .catch((error) => console.log(error));
  };

  // definimos la función 'handleChange' para manipular los cambios en los inputs del formulario
  handleChange = (updatedInfo) => {
    const { name, value } = updatedInfo.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Navbar />

        <form onSubmit={this.handleFormSubmit}>
          <div className="eachTab">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />

            <label>Tagline:</label>
            <input
              type="text"
              name="tagline"
              value={this.state.tagline}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />
            <label>Description:</label>
            <textarea
              type="text"
              name="description"
              value={this.state.description}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />
            <label>First Brewed:</label>
            <input
              type="text"
              name="first_brewed"
              value={this.state.first_brewed}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />
            <label>Brewers tips:</label>
            <input
              type="text"
              name="brewers_tips"
              value={this.state.brewers_tips}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />
            <label>Attenuation level:</label>
            <input
              type="text"
              name="attenuation_level"
              value={this.state.attenuation_level}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />
            <label>Contributed by:</label>
            <input
              type="text"
              name="contributed_by"
              value={this.state.contributed_by}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />

            <input type="submit" value="ADD NOW" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewBeer;
