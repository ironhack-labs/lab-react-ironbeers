import { NavLink } from "react-router-dom"
import beers from "../assets/beers.png";
import newbeer from "../assets/newbeer.png";
import randombeer from "../assets/randombeer.png"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function HomePage() {

    return (
        <>

        <h1> Ironhacker's Beer Company </h1>
    
        <div class="container">
    
        <div class="col">
          <div class="card">
          <NavLink to="/beers">
          <img src={beers} alt="beers" />
          <h1> All Beers</h1>
          </NavLink>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus nulla id diam scelerisque tempor. In dapibus massa vitae augue euismod consectetur. Nullam tristique tempus nisi vel egestas. Mauris lacus massa, elementum et diam eget, tempus tempus ante. Etiam in felis euismod, sagittis magna sit amet, cursus felis. In non auctor tellus. Integer a orci ac neque aliquet finibus. Etiam ullamcorper euismod turpis, ac pulvinar neque elementum vel. Proin auctor rutrum ligula eu finibus.</p>

          </div>
        </div>
        <div class="col">
          <div class="card">
          <NavLink to="/random-beer">
          <img src={randombeer} alt="random beer" />
          <h1>Random Beer</h1>
          </NavLink>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus nulla id diam scelerisque tempor. In dapibus massa vitae augue euismod consectetur. Nullam tristique tempus nisi vel egestas. Mauris lacus massa, elementum et diam eget, tempus tempus ante. Etiam in felis euismod, sagittis magna sit amet, cursus felis. In non auctor tellus. Integer a orci ac neque aliquet finibus. Etiam ullamcorper euismod turpis, ac pulvinar neque elementum vel. Proin auctor rutrum ligula eu finibus.</p>

          </div>
        </div>
        <div class="col">
          <div class="card">
          <NavLink to="/new-beer">
          <img src={newbeer} alt="new beer" />
          <h1> New Beer</h1>
          </NavLink>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus nulla id diam scelerisque tempor. In dapibus massa vitae augue euismod consectetur. Nullam tristique tempus nisi vel egestas. Mauris lacus massa, elementum et diam eget, tempus tempus ante. Etiam in felis euismod, sagittis magna sit amet, cursus felis. In non auctor tellus. Integer a orci ac neque aliquet finibus. Etiam ullamcorper euismod turpis, ac pulvinar neque elementum vel. Proin auctor rutrum ligula eu finibus.</p>
          </div>
        </div>
      </div>
    
    
    
           
        </>
    )
   
}