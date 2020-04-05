import React, { Component } from 'react'
import './NewBeer.css'
import Header from './Header';
import axios from 'axios'


class NewBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: 0,
				contributed_by: '',
				listOfBeers: []
        }
	}
	
	getAllTheBeers =  async () => {
		const arrayBeers = await axios
				.get(`https://ih-beers-api2.herokuapp.com/beers`)
				try{
					this.setState({listOfBeers: arrayBeers.data})
				}
				catch (error){
					console.log(error)
				}
		}
	
		componentDidMount() {
			this.getAllTheBeers();
		}

    handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
    };
    
    handleFormSubmit = async (event) => {
        event.preventDefault();
        const name = this.state.name;
        const tagline = this.state.tagline;
        const description = this.state.description;
        const first_brewed = this.state.first_brewed;
        const brewers_tips = this.state.brewers_tips;
        const attenuation_level = this.state.attenuation_level;
        const contributed_by = this.state.contributed_by;
		await axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`,{ name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
		try {
			this.getAllTheBeers()
			this.setState({name: '',
			tagline: '',
			description: '',
			first_brewed: '',
			brewers_tips: '',
			attenuation_level: null,
			contributed_by: ''})
		} 
		catch (error) {
			console.log(error)
		}
    }




    render() {
        return (
            <div>
                <Header />
                <form className="px-5" onSubmit={this.handleFormSubmit}>
						<label>Name:</label>
						<input
							type="text"
							name="name"
							value={this.state.name}
							onChange={(e) => this.handleChange(e)}
						/>
						<label>Tagline:</label>
						<input
							type="text"
							name="tagline"
							value={this.state.tagline}
							onChange={(e) => this.handleChange(e)}
						/>

						<label>Description:</label>
						<textarea
							name="description"
							value={this.state.description}
							onChange={(e) => this.handleChange(e)}
						/>

                        <label>First brewed:</label>
						<input
							type="text"
							name="first_brewed"
							value={this.state.first_brewed}
							onChange={(e) => this.handleChange(e)}
						/>
                        <label>Brewers tips:</label>
						<input
							type="text"
							name="brewers_tips"
							value={this.state.brewers_tips}
							onChange={(e) => this.handleChange(e)}
						/>
                        <label>Attenuation level:</label>
						<input
							type="number"
							name="attenuation_level"
							value={this.state.attenuation_level}
							onChange={(e) => this.handleChange(e)}
						/>
                        <label>Contributed by:</label>
						<input
							type="text"
							name="contributed_by"
							value={this.state.contributed_by}
							onChange={(e) => this.handleChange(e)}
						/>

						<input type="submit" value="ADD NEW" />
					</form>
                
            </div>
        )
    }
}

export default NewBeer