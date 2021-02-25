import React from 'react';
import { Link } from 'react-router-dom';
import IndexCard from './IndexCard';

const IndexPage = () => (
  <section>
    <Link to="/beers">
      <IndexCard
        imageUrl="beers"
        title="All Beers"
        description="A Pilsner Urquell drunkenly shares a shower with a Wolverine Beer. When a bar tab living with a Luna Sea ESB is sudsy, the Hazed and Infused plans an escape from a steam engine behind a Hommel Bier a coors light related to a Rolling Rock."
      />
    </Link>
    <Link to="/beer-details">
      <IndexCard
        imageUrl="random"
        title="Random Beer"
        description="An air hocky table toward a bar tab assimilates the fashionable Fosters. The tornado brew toward a Fraoch Heather Ale figures out a slow Amarillo Pale Ale. Now and then, a fat broken bottle pees on a paternal pool table."
      />
    </Link>
    <Link to="/new-beer">
      <IndexCard
        imageUrl="newBeer"
        title="New Beer"
        description="Now and then, the childlike ESB gives the last beer to a gravy like lager. When you see a Fraoch Heather Ale, it means that a Bridgeport ESB wakes up."
      />
    </Link>
  </section>
);
export default IndexPage;
