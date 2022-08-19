import React from 'react'
import beersImage from '../../assets/beers.png'
import { Link } from 'react-router-dom'


function Home() {

    


  return (
    <div>
        <div className='card'>
            <div >
                <Link to={"/beers"} ><img src={beersImage} alt="" className='card-image' /></Link>
            </div>

            <div className='card-body'>
                <h1>Beer List</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent vehicula magna in sodales pulvinar. Nam a iaculis lacus. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada 
                fames ac turpis egestas.  </p>
            </div>
        </div>

        <div className='card'>
            <div >
                <img src={beersImage} alt="" className='card-image' />
            </div>

            <div className='card-body'>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent vehicula magna in sodales pulvinar. Nam a iaculis lacus. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada 
                fames ac turpis egestas.  </p>
            </div>
        </div>

        <div className='card'>
            <div>
                <img src={beersImage} alt="" className='card-image' />
            </div>

            <div className='card-body'>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent vehicula magna in sodales pulvinar. Nam a iaculis lacus. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada 
                fames ac turpis egestas.  </p>
            </div>
        </div>

    </div>
  )
}

export default Home