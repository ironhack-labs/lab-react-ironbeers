/** @format */

import { Divider, Input } from "antd";

// Iteration 5
function Search(props) {
	return (
		<>
			<Divider>Search</Divider>

			<label>Search</label>
			<Input
				value={props.search}
				type="search"
				onChange={(e) => {
					props.setSearch(e.target.value);
				}}
			/>
		</>
	);
}

export default Search;
