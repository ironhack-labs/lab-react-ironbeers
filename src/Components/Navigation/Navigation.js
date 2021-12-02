import React from 'react'
import { Link } from 'react-router-dom'

import allBeers from '../../assets/beers.png'
import randomBeers from '../../assets/random-beer.png';
import newBeer from '../../assets/new-beer.png'

function Navigation() {
  return (
    <>
      <div className="principalSection">
        <Link to="/all">
          <img src={allBeers} alt="all beers" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat excepturi reprehenderit rem sapiente consequatur, voluptatem dolorum aperiam perferendis labore illum, vero laboriosam vel! Repellat, repudiandae. Laboriosam ad sapiente, ducimus praesentium repudiandae unde laborum error rerum totam soluta voluptatem, perferendis tempore aspernatur tenetur aliquid sunt neque explicabo earum hic modi!</p>
        </Link>
      </div>
      <div className="principalSection">
        <Link to="/beer">
          <img src={randomBeers} alt="random beer" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ad, ab adipisci, illum vel nulla obcaecati dolor enim ipsum a, ipsa deleniti blanditiis quod animi praesentium rerum quo quam distinctio laboriosam asperiores? Rem repellat eum est quae dolorem in corporis tempore? Aspernatur est consequuntur aperiam quam eaque praesentium in illum.</p>
        </Link>
      </div>
      <div className="principalSection">
        <Link to="/new">
          <img src={newBeer} alt="new beer" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore dicta qui? Possimus officiis cum ea distinctio quia rerum fugit laborum in, sit voluptatibus recusandae a aspernatur enim porro. Magni id ad et reprehenderit in, nisi voluptatibus vero laudantium hic neque dolorem reiciendis sed assumenda, voluptatem accusantium quod. Illo, iure?</p>
        </Link>
      </div>
    </>
  )
}

export default Navigation
