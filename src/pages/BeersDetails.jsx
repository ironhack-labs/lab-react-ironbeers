import { Link } from "react-router-dom";  
import allBeers from '../assets/beers.png';
import newBeers from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png'

const HomePage = ()=>{

  const homeStyle = {
    display:'flex',
    flexDirection:'column'
  }
return (
<>
  <h1>Beers</h1>
  <div>
<div style={homeStyle}>
 <img src={allBeers} alt="" />
 <Link to="/beers" style={{textAlign:'left', color: 'black', textDecoration: 'none'}}>All Beers</Link>
 <p style={{textAlign:'left'}}>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
 </div>

 <div style={homeStyle}>
 <img src={randomBeer} alt="" />
 <Link to="/random-beer" style={{textAlign:'left', color: 'black', textDecoration: 'none'}}>Random Beer</Link>
 <p style={{textAlign:'left'}}>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
 </div>

 <div style={homeStyle}>
 <img src={newBeers} alt="" />
 <Link to="/new-beer" style={{textAlign:'left', color: 'black', textDecoration: 'none'}}>New Beer</Link>
 <p style={{textAlign:'left'}}>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
 </div>
 </div>
 </>
)
}
export default HomePage