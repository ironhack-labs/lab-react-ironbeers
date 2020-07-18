import React from 'react';
// import { Link } from 'react-router-dom';


class NewBeer extends React.Component {  
    state = {
        name : null,
        tagline: null,
        description: null,
        first_brewed: null,
        brewers_tips: null,
        attenuation_level: null,
        contributed_by: null
    }

    handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
          [name]: value
        })
    }
    
      handleSubmit = event => {
        event.preventDefault();
        const {         
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by
        } = this.state;
        const data = {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by 
        }
        console.log(data)
        fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
        console.log('Success:', result);
        })
        .catch(error => {
        console.error('Error:', error);
        });
      }

    render() {
        return (
            <div className = "container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            name='name' 
                            id='name' 
                            className="form-control" 
                            placeholder="Name" 
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tagline">Tagline</label>
                        <input 
                            type="text" 
                            name='tagline' 
                            className="form-control" 
                            placeholder="Tagline" 
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input 
                            type="text" 
                            name='description' 
                            className="form-control" 
                            placeholder="Description" 
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="first_brewed">First Brewed</label>
                        <input 
                            type="text" 
                            name='first_brewed' 
                            className="form-control" 
                            placeholder="First brewed" 
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="brewers_tips">Brewers tips</label>
                        <input 
                            type="text" 
                            name='brewers_tips' 
                            className="form-control" 
                            placeholder="Brewers tips" 
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="attenuation_level">Attenuation level</label>
                        <input 
                            type="number" 
                            name='attenuation_level' 
                            className="form-control" 
                            placeholder="Attenuation level" 
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contributed_by">Contributed by</label>
                        <input 
                            type="text" 
                            name='contributed_by' 
                            className="form-control" 
                            placeholder="Contributed by" 
                            onChange={this.handleChange}
                            />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Add Beer</button>
                </form>
            </div>
        );
    }
}

export default NewBeer;