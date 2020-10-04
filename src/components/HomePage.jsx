import React from 'react'
import { Link } from 'react-router-dom';
import AllBeers from './AllBeers'


const HomePage = () => {
  return (
    
      <div>
        <Link to="/beers" component={AllBeers}>
        <div class="card mb-3">
          <img src="../images/latas-ktGD-U40534942355FNH-624x385@La Verdad.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
       </Link>
       <Link to="/random-beer" component={AllBeers}>
        <div class="card mb-3">
          <img src="..." class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
       </Link>
       <Link to="/new-beer" component={AllBeers}>
        <div class="card mb-3">
          <img src="https://static2.laverdad.es/www/multimedia/201708/11/media/cortadas/latas-ktGD-U40534942355FNH-624x385@La%20Verdad.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
       </Link>
      </div>
    
  )
}

export default  HomePage