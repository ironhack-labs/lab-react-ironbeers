import {Link} from "react-router-dom";

function Home(){
    return (
        <div>
            <section className="banner">
                <Link to="/BeerPage" className="b-link">
                    <img className="banner-picture" src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-DownloadBeer-Background-620x349.jpg" alt="banner-img"/>
                    <div className="banner-text">
                        <h3>All Beers</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </Link>
            </section>
            <section className="banner">
                <Link to="/random" className="b-link">
                    <img className="banner-picture" src="https://www.pixelstalk.net/wp-content/uploads/2016/07/HD-Beer-Images-620x349.jpg" alt="banner-img"/>
                    <div className="banner-text">
                        <h3>Random</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </Link>
            </section>
            <section className="banner">
                <Link to="/new" className="b-link">
                    <img className="banner-picture" src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Beer-Wallpaper-Download-Free.jpg" alt="banner-img"/>
                    <div className="banner-text">
                        <h3>New Beer</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </Link>
            </section>
        </div>
    )
}
export default Home;