import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div id="homepage-container">
      <Link to="/beers">
      <div className="homepage-img-wrapper">
        <img src="./src/assets/beers.png" alt="beers" />
      </div>
        <div className="homepage-wrapper">
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          neque ducimus nam ex consequuntur sint voluptate velit esse error
          laboriosam, iste non dolores necessitatibus atque deleniti distinctio
          totam explicabo magnam rem nesciunt illo magni animi ab dolorem? Sint
          rem voluptatem laboriosam officia illo nesciunt iste iure quis, quam
          placeat minima!
        </p>

        </div>
      </Link>
      <Link to="/random-beer">
      <div className="homepage-img-wrapper">
        <img src="./src/assets/random-beer.png" alt="random beer" />
      </div>
        <div className="homepage-wrapper">
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod tempora
          repudiandae impedit at odit vitae doloremque. Dolorem corrupti
          accusamus illum laboriosam nesciunt ducimus hic rem, esse, magni
          perspiciatis provident modi aspernatur velit veniam quisquam excepturi
          quos distinctio repellendus commodi. Ullam, nesciunt modi! Voluptate
          error soluta voluptatibus eum. Reiciendis, vero impedit?
        </p>

        </div>
      </Link>
      <Link to="/new-beer">
      <div className="homepage-img-wrapper">
        <img src="./src/assets/new-beer.png" alt="new beer" />
      </div>
        <div className="homepage-wrapper">
        <h2>New beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          esse distinctio quisquam, enim quaerat laboriosam repellat rerum quas
          omnis aspernatur, atque quasi obcaecati saepe dolor tempore animi
          labore, corporis aut tempora perferendis cumque illum. Blanditiis,
          dolore! Voluptates accusantium illum, sint sunt alias animi voluptas
          magni, eos eveniet odio eius ad?
        </p>

        </div>
      </Link>
    </div>
  );
}
export default HomePage;
