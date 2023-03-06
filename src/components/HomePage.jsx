import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>

        <Link to={"/beers"}>
        {" "}
        <div className='botones1'>
        <img src={"./beers.png"} />
            </div>
            <div className='all'>
            <p>All Beers</p>
            </div>
        </Link>

        <Link to={"/random-beer"} >
        {" "}
        <div className='botones2'>
        <img src={"./n.png"} />
            </div>
            <div className='random'>
            <p>Random Beer</p>
            </div>
        </Link>

        <Link to={"/new-beer"} >
        {" "}
        <div className='botones3'>
        <img src={"./r.png"} />
            </div>
            <div className='new'>
            <p>New Beer</p>
            </div>
        </Link>
      
        

    </div>
  )
}

export default HomePage