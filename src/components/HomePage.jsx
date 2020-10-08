import React from 'react'
import { Link } from 'react-router-dom';
import AllBeers from './AllBeers'



const HomePage = () => {
  return (
    
      <div>
        <Link to="/beers">
        <div className="card mb-3">
          <img src="../images/latas-ktGD-U40534942355FNH-624x385@La Verdad.jpg" className="card-img-top" alt="Beers"></img>
            <div className="card-body">
              <h5 className="card-title mt-2 ml-5 text-left">All Beers</h5>
              <p className="card-text ml-5 text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
            </div>
        </div>
       </Link>
       <Link to="/random-beer">
        <div className="card mb-3">
          <img src="https://lh3.googleusercontent.com/proxy/gXMPzigpIr9kJu4U8dlKciL_sVQ1k36if3HuDVNZf1AvXmydIwUuh34KbHnaQXjVdTTrbFCFPsNLsvmXzuuGkf1yLeVM681MTns3T3vcnqKYcwg-5lOdqbn0M6dWVyJV1DJGk1cVUFIgrfRAxKjqKIog1eFnJKnH33px4uGMCWtG" className="card-img-top" alt="Beers"></img>
            <div className="card-body">
              <h5 className="card-title mt-2 ml-5 text-left">Random Beer</h5>
              <p className="card-text ml-5 text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
            </div>
        </div>
       </Link>
       <Link to="/new-beer">
        <div className="card mb-3">
          <img src="https://static2.laverdad.es/www/multimedia/201708/11/media/cortadas/latas-ktGD-U40534942355FNH-624x385@La%20Verdad.jpg" className="card-img-top" alt="Beers"></img>
            <div className="card-body">
              <h5 className="card-title mt-2 ml-5 text-left">New Beer</h5>
              <p className="card-text ml-5 text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
            </div>
        </div>
       </Link>
      </div>
    
  )
}

export default  HomePage