import { Link } from "react-router-dom";
import homeimg1 from "../assets/beers.png"
import homeimg2 from "../assets/random-beer.png"
import homeimg3 from "../assets/new-beer.png"


function HomePage() {
    return (
        <div className="home-page">
            <h1>Home page</h1>
            <div className="card">
                <img src={homeimg1} className="card-img-top" alt="..." />
                <div className="card-body">
                <Link to="/beers"><h2>All beers</h2></Link>
                    <p>Fusce auctor tempor lorem. Sed ac metus nec leo sodales ultricies. Integer massa massa, varius vitae luctus et, maximus vitae massa. Aenean consequat mauris a tortor finibus sollicitudin et et eros. Sed aliquam ultricies sapien eu faucibus. </p>
                    
                </div>
            </div>
            <div>
                <img src={homeimg2} alt="Random Beer" />
                <Link to="/random-beer"><h2>Random Beer</h2></Link>
                <p>Fusce auctor tempor lorem. Sed ac metus nec leo sodales ultricies. Integer massa massa, varius vitae luctus et, maximus vitae massa. Aenean consequat mauris a tortor finibus sollicitudin et et eros. Sed aliquam ultricies sapien eu faucibus. </p>
            </div>
            <div>
                <img src={homeimg3} alt="New Beer" />
                <Link to="/new-beer" ><h2>New Beer</h2></Link>
                <p>Fusce auctor tempor lorem. Sed ac metus nec leo sodales ultricies. Integer massa massa, varius vitae luctus et, maximus vitae massa. Aenean consequat mauris a tortor finibus sollicitudin et et eros. Sed aliquam ultricies sapien eu faucibus. </p>
            </div>
        </div>
    )
}



export default HomePage;


{/* <div className="card" style="width: 18rem;">
    <img src={homeimg1} className="card-img-top" alt="..." />
    <div className="card-body">
        <p>Fusce auctor tempor lorem. Sed ac metus nec leo sodales ultricies. Integer massa massa, varius vitae luctus et, maximus vitae massa. Aenean consequat mauris a tortor finibus sollicitudin et et eros. Sed aliquam ultricies sapien eu faucibus. </p>
        <p>Fusce auctor tempor lorem. Sed ac metus nec leo sodales ultricies. Integer massa massa, varius vitae luctus et, maximus vitae massa. Aenean consequat mauris a tortor finibus sollicitudin et et eros. Sed aliquam ultricies sapien eu faucibus. </p>
    </div>
</div> */}
