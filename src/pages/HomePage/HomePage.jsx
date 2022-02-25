import { Link } from 'react-router-dom'

import img1 from './../../assets/beers.png'
import img2 from './../../assets/new-beer.png'
import img3 from './../../assets/random-beer.png'



const HomePage = () => {

  return (
    <>
      <Link to='/beers'>
        <div className="beers">
          <img src={img1} alt="beers" />
          <div className="container">
            <h1>All Beers</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente molestiae facere beatae adipisci eligendi quaerat quam voluptate cupiditate, alias, sint aliquam praesentium minima cum harum eos perspiciatis, soluta quasi.</p>
          </div>
        </div>
      </Link>
      
      <Link to='/random-beer'>
        <div className="beers">
          <img src={img2} alt="random beer" />
          <div className="container">
            <h1>Random Beer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente molestiae facere beatae adipisci eligendi quaerat quam voluptate cupiditate, alias, sint aliquam praesentium minima cum harum eos perspiciatis, soluta quasi.</p>
          </div>
        </div>
      </Link>
      
      <Link to='/new-beer'>
        <div className="beers">
          <img src={img3} alt="new beer" />
          <div className="container">
            <h1>New Beer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente molestiae facere beatae adipisci eligendi quaerat quam voluptate cupiditate, alias, sint aliquam praesentium minima cum harum eos perspiciatis, soluta quasi.</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default HomePage