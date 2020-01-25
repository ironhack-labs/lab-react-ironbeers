import React from 'react'
import Navbar from './Navbar';

const NewBeer = () => {
  return (
    <div className="NewBeer">
      {/* <Navbar/> */}
      
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" name="name"></input>
        </div>

        <div className="form-group">
          <label>Tagline</label>
          <input type="text" className="form-control" name="tagline"></input>
        </div>

        <div className="form-group">
          <label>Description</label>
          <input type="text" className="form-control" name="description"></input>
        </div>

        <div className="form-group">
          <label>First Brewed</label>
          <input type="text" className="form-control" name="first_brewed"></input>
        </div>


      </form>
    </div>
  )
}

export default NewBeer
