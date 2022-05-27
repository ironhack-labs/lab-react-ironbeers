import React from 'react';
import { Link } from 'react-router-dom';
import ImagesBeer from "../assets/beers.png"
import ImageRandomBeer from "../assets/random-beer.png"
import ImageNewBeer from "../assets/new-beer.png"

function HomePage() {
  return (
    <div>
    <img src={ImagesBeer} alt="" srcset="" />
      <Link to="/beers">
       <h1>All Beers</h1>
       </Link>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus possimus consectetur consequuntur dignissimos blanditiis optio quod totam enim molestiae. Saepe pariatur officiis exercitationem iusto velit consequuntur quod ratione molestias sapiente!</p>
       <img src={ImageRandomBeer} alt="" srcset="" />

       <Link to="/random-beer">
       <h1>Random Beer</h1> 
       </Link>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus possimus consectetur consequuntur dignissimos blanditiis optio quod totam enim molestiae. Saepe pariatur officiis exercitationem iusto velit consequuntur quod ratione molestias sapiente!</p>
       <img src={ImageNewBeer} alt="" srcset="" />

       <Link to="/new-beer">
       <h1>New Beer</h1>
       </Link>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus possimus consectetur consequuntur dignissimos blanditiis optio quod totam enim molestiae. Saepe pariatur officiis exercitationem iusto velit consequuntur quod ratione molestias sapiente!</p>
     
    </div>
  );
}

export default HomePage;