
import { Link } from "react-router-dom"

function HomePage() {


  return (
    <div>
    <div>
    <img src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2022/05/cerveza-2695973.jpg?tf=3840x" alt="allbeers-img" width="500px" />
    <br />
    <Link to="/beers">Cervezas</Link>
    <br />
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ipsa minima dolorem fuga quis cupiditate vel ratione magnam quisquam eaque, esse, pariatur sit eligendi doloremque magni beatae sapiente veniam ullam?</p>
    </div>

   <div>
   <img src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2022/05/cerveza-2695973.jpg?tf=3840x" alt="random-beer" width="500px" />
   <br />
    <Link to="/random-beer">Cerveza Random</Link>
    <br />
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ipsa minima dolorem fuga quis cupiditate vel ratione magnam quisquam eaque, esse, pariatur sit eligendi doloremque magni beatae sapiente veniam ullam?</p>
    </div>

    <div>
    <img src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2022/05/cerveza-2695973.jpg?tf=3840x" alt="dasdas" width="500px" />
    <br />
     <Link to="/new-beer">Agregar cerveza</Link>
     <br />
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ipsa minima dolorem fuga quis cupiditate vel ratione magnam quisquam eaque, esse, pariatur sit eligendi doloremque magni beatae sapiente veniam ullam?</p>
    </div>
    
    
    
    </div>
  )
}

export default HomePage