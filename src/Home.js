import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div id="homePage">
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5b69fb8d3917eedcf8cd5820/1533679911709-9GWCU4OCB4TOJASYHF6S/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/bridgetapscreditJessDewes.jpg?format=2500w"
            alt="bar"
          />
          <Link to="/beers" style={{ textDecoration: 'none' }}>
            <h1>All Beers</h1>
          </Link>
          <p>
            The exciting thing about beer is that there is so much to enjoy
            beyond the sensory pleasure of drinking it. Of course, it all starts
            and ends with flavor, but beer lovers have extended their interests
            to include the packaging and labeling of beer, the people who make
            it, brewing history, festivals devoted to beer, and crafts and
            collections based on beer. We study the stuff, celebrate its
            traditions, collect its artwork, debate its merits, and categorize
            its styles.
          </p>
        </div>
        <div>
          <img
            src="https://i.guim.co.uk/img/static/sys-images/Travel/Pix/pictures/2014/7/16/1405521388403/Blackfriars-Glasgow-012.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=182e0a3361d76ce002da13f0153c82b9"
            alt="bar"
          />
          <Link to="/random-beer" style={{ textDecoration: 'none' }}>
            <h1>Random Beer</h1>
          </Link>
          <p>
            The sheer number of beer styles that make up the craft beer scene is
            exciting, but it can also be intimidating -- and that’s okay. With
            all of the different beer styles and beer names, it is tough to
            remember what differentiates them from one another. That is why
            we’ve created a detailed list of the types of beer that make up the
            craft beer world, complete with a few beer names and beer styles to
            help you find your favorite types of beer.
          </p>
        </div>
        <div>
          <img
            src="https://www.imperiumbrewing.com/wp-content/uploads/2017/06/ksb-our-beers-header.jpg"
            alt="Different kinds of beer"
          />
          <Link to="/new-beer" style={{ textDecoration: 'none' }}>
            <h1>New Beer</h1>
          </Link>
          <p>
            We have big, beer-soaked plans for 2020. We’re stoked to announced
            rebranded packaging for their entire lineup of canned craft beers,
            marking the first changes to the look of the trailblazing lineup in
            over fifteen years. Along with a new look, wewill launch a host of
            new liquids in 2020, including new rotating series of beers.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
