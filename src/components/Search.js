import React from "react";

const SearchBar = ({onChangeSearchBar}) => {
  // state to manage search input
  const [searchInput, setSearchInput] = React.useState("");

  const handleChange = ({ target }) => {
    setSearchInput(target.value);

    // LIFT UP STATE -> from child to -> parent
    // after the search, we will pass through PROPS the current value of ->searchInput
    // Pass the target.value from child -> to parent 
    // onChangeSearchBar will reference to->getSearchTerm and pass in the target.value
    // Function passed through props
    onChangeSearchBar(searchInput)  
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search for a beer"
        value={searchInput} //update the value with whay it's typing for the user
        onChange={handleChange} 
      />
    </div>
  );
};

export default SearchBar;