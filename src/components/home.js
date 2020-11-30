import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
        <section className="section">
            <div className="container">
            
            <Link to="/beers">See All Beers</Link>
                <h2 className="subtitle">
                    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                </h2>
            </div>
        </section>

        <section className="section">
            <div className="container">
            
            <Link to="/random-beer">Random Beer</Link>
                <h2 className="subtitle">
                    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                </h2>
            </div>
        </section>

        <section className="section">
            <div className="container">
            
            <Link to="/new-beer">Add New Beer</Link>
                <h2 className="subtitle">
                    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                </h2>
            </div>
        </section>
    </div>
  );
};

export default Home;