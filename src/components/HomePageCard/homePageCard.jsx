

import { Link } from "react-router-dom"

import image1 from '../../assets/beers.png'
import image2 from '../../assets/new-beer.png'
import image3 from '../../assets/random-beer.png'


const HomePageCard = () =>{
    return(
        <>
        <h2>home</h2>

            <Link to='/beers'>
                <div className="cardBody">
                    <img src={image1} alt="beers" />
                    <div className="container">
                        <h1>All Beers</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente molestiae facere beatae adipisci eligendi quaerat quam voluptate cupiditate, alias, sint aliquam praesentium minima cum harum eos perspiciatis, soluta quasi.</p>
                    </div>
                </div>
            </Link>
            <Link to='/random-beer'>
                <div className="cardBody">
                    <img src={image2} alt="random beer" />
                    <div className="container">
                        <h1>Random Beer</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente molestiae facere beatae adipisci eligendi quaerat quam voluptate cupiditate, alias, sint aliquam praesentium minima cum harum eos perspiciatis, soluta quasi.</p>
                    </div>
                </div>
            </Link>
            <Link to='/new-beer'>
                <div className="cardBody">
                    <img src={image3} alt="new beer" />
                    <div className="container">
                        <h1>New Beer</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente molestiae facere beatae adipisci eligendi quaerat quam voluptate cupiditate, alias, sint aliquam praesentium minima cum harum eos perspiciatis, soluta quasi.</p>
                    </div>
                </div>
            </Link>

        </>
    )
}

export default HomePageCard