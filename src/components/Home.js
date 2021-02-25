import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './Home.css'

const Home = () => {

return(
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-10">
                <img src="https://maltosaa.com.mx/wp-content/uploads/Biggest-Craft-Beer-Releases-of-2017_fb-1.jpg" alt="craft-beers"/>
                <Link to="/beers"><h3>ALL BEERS!!</h3></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <img src="https://drinkmanila.com/wp-content/uploads/2017/08/247-IMG_1174.jpg" alt="craft-beers"/>
                <Link to="/random-beer"><h3>RANDOM BEER!!</h3></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <img src="https://bcnmes.com/wp-content/blogs.dir/4/files/2017/04/craft-beer-beata.jpg" alt="craft-beers"/>
                <Link to="/new-beer"><h3>NEW BEER!!</h3></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            
            </div>
        </div>
    </div>
    
    </>
)
}
export default Home