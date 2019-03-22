import React from "react"
import { Link } from 'react-router-dom';
const home = () =>{

return(
    <section>
    <div className="sections-home"><img src="https://nodabrewing.com/wp-content/uploads/2017/09/craft-beer.jpg" />
    
    <Link to={"/beers"}>Beers</Link>
    </div>
      <div className="sections-home"><img src="https://cdn.pastemagazine.com/www/articles/mexican%20lager%20ranking%20main%20%28Custom%29.jpg" />
      <Link to={"/randomeBeers"}>Randome Beers</Link>
      </div>
      <div className="sections-home"><img src="https://nepascene.com/wp-content/uploads/2016/03/beer-glass-bar.jpg" />
      <Link to={"/newBeer"}>New Beers</Link>
      
      </div>
      </section>
)





}



export default home