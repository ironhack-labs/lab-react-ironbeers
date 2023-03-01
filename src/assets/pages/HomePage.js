import React from 'react'


export const HomePage = () => {
  return (
    <div>
      <div>
        <img src="https://images.unsplash.com/photo-1580397581145-cdb6a35b7d3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="img" />
        <a href='/beers'>All Beers</a>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="img" />
        <a href='/random-beer'>Random Beer</a>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1615332579037-3c44b3660b53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="img" />
        <a href='/new-beer'>New Beer</a>
      </div>
    </div>
  )
}