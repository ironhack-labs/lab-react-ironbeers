import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {


    return (
            <div className ="container-fluid">
      <div className ="list-group p-5">
        <li className="list-group-item col m-2 p-5">
            <div>
          <img className="img-fluid" src="/images/beers.png" alt="Cervezas" srcset="" />
          </div>
          <Link className="text-center" to="/beers">Beers List</Link>
          <p className ="text-center ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
            placeat odio reprehenderit dolorum ipsa quae, provident rem
            consectetur, consequuntur sint tenetur recusandae aliquam! Earum quo
            vel ipsam itaque, culpa suscipit?
          </p>
        </li>
        <li className="list-group-item col m-2 p-5">
            <div>
        <img className="img-fluid" src="/images/new-beer.png" alt="Nueva Cerveza" srcset="" />
        </div>
          <Link className="text-center" to="/new-beer">New Beer</Link>
          <p className ="text-center ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
            placeat odio reprehenderit dolorum ipsa quae, provident rem
            consectetur, consequuntur sint tenetur recusandae aliquam! Earum quo
            vel ipsam itaque, culpa suscipit?
          </p>
        </li>
        <li className="list-group-item col m-2 p-5">
            <div>
        <img className="img-fluid" src="/images/random-beer.png" alt="Cerveza Random" srcset="" />
        </div>
          <Link className="text-center" to="/random-beer" >Random Beer</Link>
          <p className ="text-center ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
            placeat odio reprehenderit dolorum ipsa quae, provident rem
            consectetur, consequuntur sint tenetur recusandae aliquam! Earum quo
            vel ipsam itaque, culpa suscipit?
          </p>
        </li>
      </div>
    </div>
    )
}
