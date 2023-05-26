import { Link } from "react-router-dom"

function Homepage() {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <article className="home-article">
            <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Beer-Image-HD.jpg" alt='beer'/>
            <Link to={'/beers'}><h2>All Beers</h2></Link>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </article>
        <article className="home-article">
            <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Beer-Image.jpg" alt='beer'/>
            <Link to={'/randombeer'}><h2>Random Beer</h2></Link>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </article>
        <article className="home-article">
            <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/HD-Beer-Images.jpg" alt='beer'/>
            <Link to={'/newbeer'}><h2>New Beer</h2></Link>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </article>
    </div>
  )
}

export default Homepage