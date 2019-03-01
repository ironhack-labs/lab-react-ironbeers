import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
        <div className="homePage">
            <div className="homeAllBeers">
                <NavLink to="/beers">
                    <img src="https://storage.googleapis.com/boropark24.com/2018/04/beer.jpg" alt="beer" height="150px" />
                    <h1>All Beers</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa minima aliquam! Tempora unde ipsa minus nemo, ea laborum fugiat praesentium doloremque quis nobis repellendus incidunt tenetur iusto exercitationem. Itaque!</p>
                </NavLink>
            </div>


            <div className="homeRandomBeer">
                <NavLink to="/random-beer" >
                    <img src="https://i2.wp.com/media.hungryforever.com/wp-content/uploads/2017/11/22130221/best-beer-malaysia.jpg?ssl=1?w=356&strip=all&quality=80" alt="beer" height="150px" />
                    <h1>Random Beer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores architecto corrupti ad beatae laboriosam optio sed numquam, incidunt ipsum? Qui labore illum dignissimos aperiam magni ipsa esse pariatur quam.</p>
                </NavLink>
            </div>

            <div className="homeNewBeer">
                <NavLink to="/new-beer" >
                    <img src="http://willrunforbeer.com/wp-content/uploads/2017/07/69.jpg" alt="beer" height="150px" />
                    <h1>New Beer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores architecto corrupti ad beatae laboriosam optio sed numquam, incidunt ipsum? Qui labore illum dignissimos aperiam magni ipsa esse pariatur quam.</p>
                </NavLink>
            </div>
        </div>
        )
    }
}