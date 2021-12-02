import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/beers.png';
import img2 from '../../assets/new-beer.png';
import img3 from '../../assets/random-beer.png';

function HomePage() {
  return (
    <div>
      <div className="main">
        <Link className="card" to="/beers">
          <img src={img1} alt="" />
          <h3>All Beers</h3>
          <p>
            Excepteur aute officia sunt cillum qui aliquip ipsum sit deserunt
            ut. Velit fugiat magna occaecat enim enim culpa nostrud laboris.
            Tempor Lorem sint do nostrud laborum aute non cillum mollit cillum
            ad nisi id. Laboris tempor velit fugiat incididunt occaecat fugiat
            sint. Aute deserunt duis labore dolor aliquip. Velit elit ullamco
            fugiat voluptate velit nulla sint. Occaecat officia ea consequat
            pariatur adipisicing Lorem qui amet.
          </p>
        </Link>
        <Link className="card" to="/beers/random">
          <img src={img2} alt="" />
          <h3>Random Beer</h3>
          <p>
            Excepteur aute officia sunt cillum qui aliquip ipsum sit deserunt
            ut. Velit fugiat magna occaecat enim enim culpa nostrud laboris.
            Tempor Lorem sint do nostrud laborum aute non cillum mollit cillum
            ad nisi id. Laboris tempor velit fugiat incididunt occaecat fugiat
            sint. Aute deserunt duis labore dolor aliquip. Velit elit ullamco
            fugiat voluptate velit nulla sint. Occaecat officia ea consequat
            pariatur adipisicing Lorem qui amet.
          </p>
        </Link>
        <Link className="card" to="/new-beer">
          <img src={img3} alt="" />
          <h3>New Beer</h3>
          <p>
            Excepteur aute officia sunt cillum qui aliquip ipsum sit deserunt
            ut. Velit fugiat magna occaecat enim enim culpa nostrud laboris.
            Tempor Lorem sint do nostrud laborum aute non cillum mollit cillum
            ad nisi id. Laboris tempor velit fugiat incididunt occaecat fugiat
            sint. Aute deserunt duis labore dolor aliquip. Velit elit ullamco
            fugiat voluptate velit nulla sint. Occaecat officia ea consequat
            pariatur adipisicing Lorem qui amet.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
