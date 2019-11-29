import React, { Component} from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
    return (
        <div>
              <div>
    <img src='./images/beers.png' alt='' />  
    <div>
    <Link to='/beers'>
      
      <h1>All beers</h1>  
   
      </Link>
       </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempore excepturi voluptate, eos perferendis facilis obcaecati. Ea nihil, earum cupiditate voluptatem, molestiae veritatis facilis perferendis, eos vero possimus velit illum.</p>
  </div>
  <div>
    <img src='./images/random-beer.png' alt='' />
    <Link to='/random-beer'>
      <h1>Random Beer</h1></Link>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempore excepturi voluptate, eos perferendis facilis obcaecati. Ea nihil, earum cupiditate voluptatem, molestiae veritatis facilis perferendis, eos vero possimus velit illum.</p>
  </div>
  <div>
    <img src='./images/new-beer.png' alt='' />
    <Link to='/new-beer'>
      <h1>New Beer</h1></Link>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempore excepturi voluptate, eos perferendis facilis obcaecati. Ea nihil, earum cupiditate voluptatem, molestiae veritatis facilis perferendis, eos vero possimus velit illum.</p>
  </div>
</div>

    )
}}

export default Home