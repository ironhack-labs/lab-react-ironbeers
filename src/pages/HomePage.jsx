import { Link } from "react-router-dom";
import beerImage from "./../assets/beers.png";
import randomBeerImage from "./../assets/random-beer.png";
import newBeer from "./../assets/new-beer.png";

function HomePage() {
    return (
        <div className="container">
            <section style={{display:"flex", flexDirection:"column"}}>
                <img src={beerImage}/>
                <Link style={{fontSize:"35px", color:"black"}} to={`/beers`} >All the Beers</Link>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book.
                </p>
            </section>
            <section style={{display:"flex", flexDirection:"column"}}>
                <img src={randomBeerImage}/>
                <Link style={{fontSize:"35px", color:"black"}} to={`/random-beer`} >Random Beers</Link>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book.
                </p>
            </section>
            <section style={{display:"flex", flexDirection:"column"}}>
                <img src={newBeer}/>
                <Link style={{fontSize:"35px", color:"black"}} to={`/new-beer`} >New Beer</Link>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book.
                </p>
            </section>
            
            
        </div>
    )
}

export default HomePage;
