import React from 'react'
import { Link } from 'react-router-dom';
// import HeaderMain from "./views/HeaderMain";



export default function Home() {
    return (
        <div>
            {/* <HeaderMain /> */}
            <div className="page">
                <div className="home-container">
                    <Link to="/Beers"><img src="../images/beers.png" alt="" /></Link>
                    <h1>All Beers</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima accusamus deserunt molestiae consequatur. Pariatur non exercitationem odit velit dolorem dolores, officiis doloremque maiores earum ex consectetur, hic, quibusdam placeat nobis!</p>
                </div>
                <div className="home-container">
                    <Link to="/RandomBeer"> <img src="../images/new-beer.png" alt="" /></Link>
                    <h1>Random Beer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, similique enim! Tenetur distinctio quaerat explicabo saepe suscipit id optio quos doloremque, molestias magnam aperiam repudiandae consequatur. Magnam tempore rem maxime.</p>
                </div>
                <div className="home-container">
                    <Link to="/NewBeer"><img src="../images/random-beer.png" alt="" /></Link>
                    <h1>New Beer</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur ratione nemo corporis! Fugiat, ex perspiciatis, consequuntur numquam natus error omnis laboriosam quas autem molestias nulla nihil at nam molestiae deserunt!</p>
                </div>

            </div>
        </div>
    )
}
