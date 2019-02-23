import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const home = () => {
  return (
    <div className="home-container">
      <Link to="/all" style={{ textDecoration: 'none' }} >
        <img src="/images/grifos.jpg" alt="Beers" />
        <div className="text-container">
          <h3>All Beers</h3>
          <p>
            Minions ipsum me want bananaaa! Chasy wiiiii me want bananaaa!
            Belloo! Para tú hana dul sae jiji aaaaaah me want bananaaa!
            
          </p>
        </div>
      </Link>
      <Link to="/random" style={{ textDecoration: 'none' }}>
        <img src="/images/juniperphoton-404052-unsplash.jpg" alt="Beers" />
        <div className="text-container">
          <h3>Random Beer</h3>
          <p>
            Belloo! aaaaaah poulet tikka masala baboiii. Aaaaaah ti aamoo!Tatata
            bala tu para tú poulet tikka masala bananaaaa baboiii wiiiii
            underweaaar. 
          </p>
        </div>
      </Link>

      <Link to="/new" style={{ textDecoration: 'none' }}>
        <img src="/images/natasha-kapur-340248-unsplash.jpg" alt="Beers" />
        <div className="text-container">
          <h3>New Beer</h3>
          <p>
            Bananaaaa jeje jiji jeje poulet tikka masala daa gelatooo bappleees
            tank yuuu! Tulaliloo la bodaaa. Bananaaaa ti aamoo!
          </p>
        </div>
      </Link>
    </div>
  );
};

export default home;
