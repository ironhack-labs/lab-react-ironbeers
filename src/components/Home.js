import React from "react";
import { Link } from 'react-router-dom'
import BeerList from './BeerList'


const Home = () => {
  return (
    <>
        <div>
        <img src="../assets/beers.png" alt="cervecitas"/>
            <Link to={"/beer-list"}>Beer List</Link>
        </div>

    </>
  )
}

export default Home

