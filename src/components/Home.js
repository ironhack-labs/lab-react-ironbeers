import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">HOME!
    <Link to="/n">NotFound</Link>
    </div>
  );
}

export default Home;
