import React from "react";
import { Link } from "react-router-dom";


//style="width: 18rem;"



export default function HomeScreen() {
  return (
    <>
      <div className="card m-1" style={{width: "18rem"}} >
        <img src="https://www.shbarcelona.com/blog/en/wp-content/uploads/2016/02/First-beer-photo-e1455748858975-810x564.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">ALL BEERS</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/beers" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
      <div className="card m-1" style={{width: "18rem"}}>
        <img src="https://www.gannett-cdn.com/authoring/2019/03/13/NCOA/ghows-OH-b79abcb6-979c-4c96-a7f8-b4216c2160c9-c2bdad9d.jpeg?width=660&height=441&fit=crop&format=pjpg&auto=webp" className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">RANDOM BEER</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/random-beer" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
      <div className="card m-1" style={{width: "18rem"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2fOmo33a3wDqr46XYr3NL8Gj7GsLOvE9c9MiQhNU5lmrIGy8frL6fj1N0t8fv9n-YkBo&usqp=CAU" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">NEW BEER</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/new-beer" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>

    </>
  );
}
