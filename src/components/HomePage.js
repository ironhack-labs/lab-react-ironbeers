import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className = "container">
      <div className="col">
      <img style = {{width: "300px"}}src = "https://media-cdn.tripadvisor.com/media/photo-s/11/cf/34/ea/bottled-beer-range.jpg" alt = "All beers"/>
        <Link to = '/allbeers'><h1>All Beers</h1></Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a quam
          nec urna suscipit sollicitudin quis a eros. Curabitur laoreet massa eu
          metus mollis, ut imperdiet nisl eleifend. Donec tincidunt lorem arcu,
          id pulvinar massa placerat in.
        </p>
      </div>
      <div className="col">
      <img style = {{width: "300px"}}src = "https://www.pilotonline.com/resizer/M5C1O8AOZ9uGiWOEs9XPg6HSm88=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/DVRFM6QZEREX7P22JOE62LLTGQ.jpg" alt = "Random beers"/>
        <Link to = '/randombeer'><h1>Random Beer</h1></Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a quam
          nec urna suscipit sollicitudin quis a eros. Curabitur laoreet massa eu
          metus mollis, ut imperdiet nisl eleifend. Donec tincidunt lorem arcu,
          id pulvinar massa placerat in.
        </p>
      </div>
      <div className="col">
      <img style = {{width: "300px"}}src = "https://nationaltoday.com/wp-content/uploads/2019/04/national-beer-day.jpg" alt = "New beers"/>
       <Link  to = '/newbeer'><h1>New Beer</h1></Link> 
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a quam
          nec urna suscipit sollicitudin quis a eros. Curabitur laoreet massa eu
          metus mollis, ut imperdiet nisl eleifend. Donec tincidunt lorem arcu,
          id pulvinar massa placerat in.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
