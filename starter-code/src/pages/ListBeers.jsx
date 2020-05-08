import React, { Component } from 'react';
import Header from '../components/Header';
import BeerBlocList from '../components/BeerBlocList';
import InputForm from '../components/InputForm';
import axios from 'axios';
import '../stylesheets/ListBeers.css';

class ListBeers extends Component {
	state = { allBeers: [], search: '' };

	componentDidMount() {
		axios
			.get('https://ih-beers-api2.herokuapp.com/beers')
			.then((APIResponse) => {
				this.setState({ allBeers: APIResponse.data });
			})
			.catch((error) => console.log(error));
	}

	handleSearch = (event) => {
		this.setState({ search: event.target.value });
		axios
			.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.search}`)
			.then((APIResult) => {
				this.setState({ allBeers: APIResult.data });
			})
			.catch((error) => console.log(error));
	};

	render() {
		let errorMessage = '';
		if (!this.state.allBeers.length && this.state.search !== '') {
			errorMessage = 'There is no beer matching your search';
		} else if (!this.state.allBeers.length) {
			errorMessage = 'There is no beer in the database...';
		}

		return (
			<React.Fragment>
				<Header />
				<form>
					<InputForm
						type="text"
						name="search"
						change={this.handleSearch}
						value={this.state.search}
						placeholder="Search..."
					/>
				</form>
				{!this.state.allBeers.length ? (
					<p className="empty">{errorMessage}</p>
				) : (
					this.state.allBeers.map((beer, index) => {
						return <BeerBlocList key={index} data={beer} />;
					})
				)}
			</React.Fragment>
		);
	}
}

export default ListBeers;
