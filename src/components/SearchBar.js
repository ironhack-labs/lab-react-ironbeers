function Search(props) {
    const handleInputChange = event => {
		props.setQuery(event.target.value);
	}
	return (
		<input type="text" onChange={ handleInputChange } />
	);
};

export default Search;