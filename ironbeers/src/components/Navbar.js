import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let width = {width: 600, height: 200}
  return (
    <div className="main">
        <div>
            <Link to='/beers'>
                <img  style={width} src='https://cdn.pastemagazine.com/www/articles/classic%20beers%20shutter%20long.jpg' alt="" />
                <h1>All Beers</h1>
                <p>Lorem asff fsdddddddddddd fsdddddddddddd sffffffffffff</p>
            </Link>
        </div>
        <div>
            <Link to='/random-beer'>
                <img style={width} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA8cTJR6K6xQxFhUxucxCuSe-7gk9C0s2XCChHXtXAyVOon-l9" alt="" />
                <h1>Random Beer</h1>
                <p>Lorem asff fsdddddddddddd fsdddddddddddd sffffffffffff</p>
            </Link>
        </div>
        <div>
            <Link to='/new-beer'>
                <img style={width} src="https://www.star2.com/wp-content/uploads/2015/10/beer-e1444989514150-1170x480.jpg" alt="" />
                <h1>New Beer</h1>
                <p>Lorem asff fsdddddddddddd fsdddddddddddd sffffffffffff</p>
            </Link>
        </div>
    </div>
  )
}

export default Navbar;