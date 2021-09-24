import React from 'react';

const SearchBeer = ({ keyword, setKeyword, setStock, stock }) => {
    

   
/*     const handleInputchange = (event) => {
      if (isChecked) {
        setStock(oldList);
      }
      if (!isChecked) {
        setStock(newList);
      }
      setIsChecked(!isChecked);
    }; */
  
/*     let Checkbox = () => (
      <input
        type="checkbox"
        name="checkboxName"
        id="ShowOnlyStock"
        checked={isChecked}
        onChange={handleInputchange}
      />
    ); */
  
    return (
      <div className="searchBar">
        <h3>Search</h3>
        <input
          className="bar"
          key="random1"
          value=''
          placeholder={'Search Product'}
                />
        <div>
        </div>
      </div>
    );
  };
  
  export default SearchBeer;