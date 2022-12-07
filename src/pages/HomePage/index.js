import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const HomePage = () => {
  return (
    <div>
        <section>
            <img 
                src='https://therooster.com/files/styles/hero/public/beers_0.jpg?itok=0_WPcWZg'
                alt=''
                className='homeImages'
            />
            <div className='homeText'>
                <Link to='/beers'>
                    <h1>All Beer</h1>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu feugiat nisi. Vivamus at vestibulum lorem. Ut vulputate libero felis, aliquet condimentum quam sollicitudin ac. </p>
            </div>
        </section>
        
        <section>
            <img 
                src='https://s3-eu-west-2.amazonaws.com/noblegreen-production/blog_posts/234/medium.png?1645023198'
                alt=''
                className='homeImages'
            />
            <div className='homeText'>
                <Link to='/random-beer'>
                    <h1>Random Beer</h1>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu feugiat nisi. Vivamus at vestibulum lorem. Ut vulputate libero felis, aliquet condimentum quam sollicitudin ac. </p>            
            </div>
        </section>
        
        <section>
            <img 
                src='http://cdn.shopify.com/s/files/1/0664/0834/9934/collections/Gift-Fathers-Day-Landscape-pick-n-mix-beer.jpg?v=1669034517'
                alt=''
                className='homeImages'
            />
            <div className='homeText'>    
                <Link to='/new-beer'>
                    <h1>New Beer</h1>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu feugiat nisi. Vivamus at vestibulum lorem. Ut vulputate libero felis, aliquet condimentum quam sollicitudin ac. </p>            
            </div>
        </section>
    </div>
  )
}

export default HomePage