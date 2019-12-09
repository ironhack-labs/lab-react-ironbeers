
import React from 'react'

function HomePage (){
 
    return (
      <div>
        <div className='card text-left p-2'>
          <img src="/images/beers.png" alt="beers" className='card-img-top pb-1'/>
          <h3 className="card-title"><a href="/beers" className='text-dark'>All Beers</a></h3>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Fuga eveniet dolores est qui harum eligendi, adipisci accusantium quam minus autem corporis omnis similique animi eum sit voluptatem quis cumque odit.</p>
        </div>
        <div className='card text-left p-2'>
          <img src="/images/random-beer.png" alt="random-beer" className='card-img-top pb-1'/>
          <h3 className="card-title"><a href="/random-beer" className='text-dark'>Random Beer</a></h3>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident enim delectus iste sapiente blanditiis ad quam asperiores ut, dignissimos ipsum dicta impedit error suscipit iusto deserunt explicabo nobis nulla laudantium!</p>
        </div>
        <div className='card text-left p-2'>
          <img src="/images/new-beer.png" alt="new beer" className='card-img-top pb-1'/>
          <h3 className="card-title" className='text-dark'><a href="/newbeer" className='text-dark'>New Beer</a></h3>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo adipisci ducimus fugit, iure sunt id fugiat eligendi aliquam perspiciatis nisi harum animi dolorem, exercitationem dolor rerum cupiditate, ab totam cumque.</p>
        </div>
      </div>
    )
  
}

export default HomePage
