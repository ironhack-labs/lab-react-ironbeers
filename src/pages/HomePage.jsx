import { Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";

function HomePage() {
  return (
    <ul>
      <li>
        <Link to="/beers">All Beers</Link>
      </li>
      <li>
        <Link to="/random-beer">Random Beer</Link>
      </li>
      <li>
        <Link to="/new-beer">New Beer</Link>
      </li>
    </ul>
  );
}

export default HomePage;
