import React  from 'react';
import {Link} from "react-router-dom";
export default class Home extends React.Component{
    render() {
  return (
    <div className="home">
    <nav className="navbar">
       
        <Link to={"/"}> <button>🍻</button></Link>
    </nav>
     <div clasName="beers">
     <Link to={"/Beers"}><h1>All Beers</h1></Link>
     <img src="../images/beers.png"></img>
     <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nullam lectus vitae varius quam phasellus ante justo velit blandit, sociosqu urna cubilia ridiculus est fringilla nisi sed hac dapibus enim lobortis integer id lacus.</p>



    </div>
    <div clasName="randombeers">
     <Link to={"/RandomBeer"}><h1>Random Beer</h1></Link>
     <img src="../images/random-beer.png"></img>
     <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nullam lectus vitae varius quam phasellus ante justo velit blandit, sociosqu urna cubilia ridiculus est fringilla nisi sed hac dapibus enim lobortis integer id lacus.</p>
     </div>

     <div clasName="newbeer">
     <Link to={"/NewBeer"}><h1>New Beer</h1></Link>
     <img src="../images/new-beer.png"></img>
     <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nullam lectus vitae varius quam phasellus ante justo velit blandit, sociosqu urna cubilia ridiculus est fringilla nisi sed hac dapibus enim lobortis integer id lacus.</p>
    </div> 


      {/* <h1>{this.props.movie.year}</h1>
      <h1>{this.props.movie.director}</h1> */}
    </div>
  );
}
}
