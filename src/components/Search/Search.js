import React, { useState } from 'react';
// assets
import './Search.css';

const Search = (props) => {
	const [ inputSearch, setInputSearch ] = useState('');

	const handleSearch = (e) => {
		setInputSearch(e.target.value);
		props.filter(e.target.value);
	};

	return (
		<form className="formSearch">
			<input
				className="inputFormSearch"
				placeholder="Search..."
				type="text"
				value={inputSearch}
				onChange={handleSearch}
			/>
			<hr className="noTePases" />
		</form>
	);
};

export default Search;
