import React from 'react'
import image1 from '../../assets/beers.png'
import image2 from '../../assets/random-beer.png'
import image3 from '../../assets/new-beer.png'

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to='/beers' className='text-decoration-none' style={{color:'black'}}>
        <img src={image1} alt="beers" /> 
        <p className='m-4'><b>All Beers</b> <br></br> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum architecto labore, accusantium veritatis eaque, nobis repellendus quis minus corporis praesentium dignissimos nam, repellat ad. Maiores dignissimos obcaecati eum pariatur voluptatum.</p>
      </Link>
      <Link to='/random' className='text-decoration-none' style={{color:'black'}}>
        <img src={image2} alt="Random Beer" /> 
        <p className='m-4'><b>Random Beer</b> <br></br> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum architecto labore, accusantium veritatis eaque, nobis repellendus quis minus corporis praesentium dignissimos nam, repellat ad. Maiores dignissimos obcaecati eum pariatur voluptatum.</p>
      </Link>
      <Link to='/new' className='text-decoration-none' style={{color:'black'}}>
        <img src={image3} alt="new Beer" /> 
        <p className='m-4'><b>New Beer</b> <br></br> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum architecto labore, accusantium veritatis eaque, nobis repellendus quis minus corporis praesentium dignissimos nam, repellat ad. Maiores dignissimos obcaecati eum pariatur voluptatum.</p>
      </Link>
    </div>
  )
}

export default Home