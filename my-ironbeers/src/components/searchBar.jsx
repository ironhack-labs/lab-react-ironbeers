import React, { Component } from 'react';
import './searchBar.css';

class SearchBar extends Component {
	state = {
		search: ''
	};

	filter = (e) => {
		const newState = { ...this.state };
		newState.search = e.target.value;
		this.props.FilterName(newState.search);
		this.setState(newState);
	};

	render() {
		return (
			<div className="divSearch">
				<input className="search" type="text" onChange={(e) => this.filter(e)} />
			</div>
		);
	}
}

export default SearchBar;
