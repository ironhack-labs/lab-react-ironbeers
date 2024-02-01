import { NavLink } from "react-router-dom";
import Img0 from '../assets/beers.png';
import img1 from '../assets/random-beer.png';
import img2 from '../assets/new-beer.png';




function HomePage() {
    return (
        <div className="col-12">
            <nav>
                <NavLink to={"/beers"} >
                    <img src={Img0} />
                    <h1 className="text-dark">All Beers</h1>
                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam veniam quibusdam mollitia doloribus, quisquam velit suscipit odit ratione tenetur fugit odio amet doloremque, dolorem aspernatur commodi autem excepturi incidunt repudiandae?</h4>
                </NavLink>
                <NavLink to={"/random-beer"}>
                        <img src={img1} />
                        <h1 className="text-dark">Random Beers</h1>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero inventore perspiciatis accusamus totam dignissimos, modi placeat tempore esse sequi necessitatibus similique dicta autem fugiat reiciendis cumque a nulla voluptatum consequatur.</h4>
                </NavLink>
                <NavLink to="/new-beer" >
                    <img src={img2}  />
                    <h1 className="text-dark">New Beer</h1>
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quod placeat unde eveniet sunt animi, quas consectetur et quos saepe numquam at, illo alias qui, minus velit possimus minima dolorem!</h4>
                </NavLink>
            </nav>
        </div>
    );
}

export default HomePage;
