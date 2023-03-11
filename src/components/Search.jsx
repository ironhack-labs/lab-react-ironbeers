import React from 'react'

function Search() {

    function handleSubmit(e){
        e.preventDefault()
       
    }
  return (
    <div>
    <form action="" method="GET" onSubmit={handleSubmit}>
    <label htmlFor=''>
    Beer Search
    </label>
    <input type="text" placeholder='Search for a beer name'></input>
    </form>
    </div>
  )
}

export default Search