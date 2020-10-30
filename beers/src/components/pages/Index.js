import React from 'react'
import { Link } from 'react-router-dom'



export default () => {

    return (
       <>
       <div className="container">
           <div className="logo-wrapper">
               <img src="https://www.glasgowliving.today/wp-content/uploads/2017/09/Brewdog-Logo.png" alt="brewdog-logo" />
           </div>
           <div className='card-columns'>
           <Link to = '/allBeers'>
           <div className="card">
                <img className="card-img-top img-fluid " src="https://www.hosteleria.site/wp-content/uploads/2019/07/bar-731x411.jpg" alt="beers img1"/>
                <div className="card-body">
                    <h4 className="card-title">All Beers</h4>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content
                        is a little bit longer.</p>
                </div>
            </div>
           </Link>
           <Link to = '/randomBeer'>
           <div className="card">
                <img className="card-img-top img-fluid" src="https://i.insider.com/5476423e69beddbb65619d0d?width=600&format=jpeg&auto=webp" alt="beers img2"/>
                <div className="card-body">
                    <h4 className="card-title">Random Beer</h4>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content
                        is a little bit longer.</p>
                </div>
            </div>
           </Link>
           <Link to = '/newBeer'>
           <div className="card">
                <img className="card-img-top img-fluid" src="https://www.marketingtochina.com/wp-content/uploads/2019/11/26-052442-man_goes_on_beer_only_diet_loses_25_pounds.jpg" alt="beers img3"/>
                <div className="card-body">
                    <h4 className="card-title">New Beer</h4>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content
                        is a little bit longer.</p>
                </div>
            </div>
           </Link>
       </div>
       </div>
       
       
        
    </>
    )
}