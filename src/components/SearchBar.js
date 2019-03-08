import React from 'react';

export default ({onSearch}) => {
    return (
      <form>
        <input class="input is-medium" type="text" placeholder="Search a beer" onChange={(e) => onSearch(e.target.value)}/>
      </form>
    )
  }
