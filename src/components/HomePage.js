import React from 'react'
import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <div id="homePage">
      <Link className="homeLink" to="/beers">
        <img src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/article/2019/03/04/ab-inbev-on-low-no-alcohol-beers-we-re-committed-to-leading-innovation/9204716-6-eng-GB/AB-InBev-on-low-no-alcohol-beers-We-re-committed-to-leading-innovation.jpg" alt="All Beers" />
        <h2>All Beers</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
      </Link>
      <Link className="homeLink" to="/random-beer">
        <img src="https://www.sciencenews.org/wp-content/uploads/2020/05/050620_mt_beer_feat-1028x579.jpg" alt="Random Beer" />
        <h2>Random Beer</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
      </Link>
      <Link className="homeLink" to="/new-beer">
        <img src="https://www.theglobeandmail.com/resizer/CN7oZ2w5DGj5O65F0ns0BHKbUB8=/1200x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/S7OOUXO3ZRECVHLIVLXPYSUYKE.jpg" alt="New Beer" />
        <h2>New Beer</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
      </Link>
    </div>
  )
}
