import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Home extends Component {
                 render() {
                   return (
                     <div>
                       <div>
                         <h1>All Beers</h1>
                         <p>
                           Lorem ipsum dolor, sit amet consectetur adipisicing
                           elit. Temporibus cumque dolores ratione enim aperiam
                           blanditiis praesentium accusamus voluptatem pariatur
                           laudantium.
                         </p>
                         <Link to={"/beers"}> All Beers</Link>
                       </div>
                       <div>
                         <h1>Random Beer</h1>
                         <p>
                           Lorem ipsum dolor, sit amet consectetur adipisicing
                           elit. Temporibus cumque dolores ratione enim aperiam
                           blanditiis praesentium accusamus voluptatem pariatur
                           laudantium.
                         </p>
                         <Link to={"/beers/random"}> Random Beer</Link>
                       </div>
                       <div>
                         <h1>New Beer</h1>
                         <p>
                           Lorem ipsum dolor, sit amet consectetur adipisicing
                           elit. Temporibus cumque dolores ratione enim aperiam
                           blanditiis praesentium accusamus voluptatem pariatur
                           laudantium.
                         </p>
                         <Link to={"/beers/new"}> New Beer</Link>
                       </div>
                     </div>
                   );
                 }
               }
