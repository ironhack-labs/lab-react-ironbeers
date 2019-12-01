import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Home extends Component {
                 render() {
                   return (
                     <div>
                       <div className="features">
                         <Link className="" to={"/beers"}>
                           <img
                             className="imgHome"
                             src="../images/beers.png"
                             alt="beers"
                           />
                           <h1>All Beers</h1>
                           <p>
                             Lorem ipsum dolor, sit amet consectetur adipisicing
                             elit. Temporibus cumque dolores ratione enim
                             aperiam blanditiis praesentium accusamus voluptatem
                             pariatur laudantium.
                           </p>
                         </Link>
                       </div>
                       <div className="features">
                         <Link to={"/beers/random"}>
                           <img
                             className="imgHome"
                             src="../images/random-beer.png"
                             alt="randombeer"
                           />
                           <h1>Random Beer</h1>
                           <p>
                             Lorem ipsum dolor, sit amet consectetur adipisicing
                             elit. Temporibus cumque dolores ratione enim
                             aperiam blanditiis praesentium accusamus voluptatem
                             pariatur laudantium.
                           </p>
                         </Link>
                       </div>
                       <div className="features">
                         <Link to={"/beers/new"}>
                           <img
                             className="imgHome"
                             src="../images/new-beer.png"
                             alt="beers"
                           />
                           <h1>New Beer</h1>
                           <p>
                             Lorem ipsum dolor, sit amet consectetur adipisicing
                             elit. Temporibus cumque dolores ratione enim
                             aperiam blanditiis praesentium accusamus voluptatem
                             pariatur laudantium.
                           </p>
                         </Link>
                       </div>
                     </div>
                   );
                 }
               }
