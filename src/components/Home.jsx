import { Link } from "react-router-dom";
import beers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"
import { GlobalStyle } from "./Style/Global";


export function Home() {
  return (
    <section>
      <br></br>
      <ul className="custom-controls">
    
          <img 
          //  style={{
          //   maxHeight: '10vh',
          //   overflowX: 'none',
          //   overflowY: 'scroll',
          // }}
          src={beers} alt="" width={"100%"}/>
     
      </ul>
      <br></br>

      <Link to={`/beers`}>
     <h1>All Beers</h1>      
  </Link>

      <p>
        No matter where you go in the United States, there's almost certainly a
        barstool and a frosty pint with your name on it. From classic light
        lagers and ales to craft-beer style gourmet drafts, commercial breweries
        are busy pumping out amber-colored gold to sate the thirst of millions
        of Americans. According to YouGov America, these incredibly popular
        beers span the entire spectrum of taste and price, constituting the
        majority of beer drunk nationwide.
      </p>

      <section>
        <br></br>
        <ul className="custom-controls">
        
            <img src={newBeer} alt=""  width={"100%"}/>
     
        </ul>
        <br></br>
        <Link to={`/randombeers`}>
     <h1>Random Beers</h1>      
  </Link>
        <p>
          Riding through a challenging and competitive year, taprooms and
          brewpubs found ways to innovate and keep customers coming through the
          door, while brands with a retail presence continued to compete with
          other beverage alcohol choices for shelf space.
        </p>
      </section>
      <section>
  
        <br></br>
        <ul className="custom-controls">
      
            <img src={randomBeer} alt=""  width={"100%"}/>
     
        </ul>
        <br></br>
        <Link to={`/newbeers`}>
     <h1>New Beers</h1>      
  </Link>
        

        <p>
          In the fight for fair treatment for craft brewers, the Brewers
          Association submitted comments to the Department of the Treasury on
          wholesaler consolidation, unfair state franchise laws, and
          restrictions on direct-to-consumer sales. In February, the U.S.
          Treasury, in conjunction with the U.S. Department of Justice (DOJ) and
          Federal Trade Commission (FTC) released its report on competition in
          the beer, wine and spirits industries.
        </p>
      </section>

      <GlobalStyle />
    </section>
  );
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  