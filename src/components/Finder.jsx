import React from 'react'

function Finder({ onSearch }) {

  const handleSearchChange = (event) => {

    const { value } = event.target;
    onSearch(value)
  }

  return (
    <div className='input-group'>
      <span className='input-group-text' ><i className='fa fa-search'></i></span>
      <input 
        type="text" 
        className='form-control' 
        placeholder='search beer' 
        onChange={handleSearchChange}
        />

    </div>
  )
}

Finder.defaultProps = {

  onSearch: () => {},

}

export default Finder