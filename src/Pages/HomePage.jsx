import Allbeers from "../assets/beers.png"
import Randombeers from "../assets/random-beer.png"
import Newbeer from "../assets/new-beer.png"
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className='HomePage-Container'>
            <section className="HomePage-Section">
                <img src={Allbeers} alt="" width="100%" />
                <Link to={"/beers"}><h2>All beers</h2></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam harum perspiciatis in odit iusto cum quaerat sed sunt. Quas ipsum veniam mollitia impedit officia excepturi dolore, corrupti optio eum.</p>
            </section>
            <section className="HomePage-Section">
                <img src={Randombeers} alt="" width="100%" />
                <Link to={"/random-beer"}><h2>Random beers</h2></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam harum perspiciatis in odit iusto cum quaerat sed sunt. Quas ipsum veniam mollitia impedit officia excepturi dolore, corrupti optio eum.</p>
            </section>
            <section className="HomePage-Section">
                <img src={Newbeer} alt="" width="100%" />
                <Link to={"/new-beer"}><h2>New beer</h2></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam harum perspiciatis in odit iusto cum quaerat sed sunt. Quas ipsum veniam mollitia impedit officia excepturi dolore, corrupti optio eum.</p>
            </section>
        </div>
    )
}

export default HomePage