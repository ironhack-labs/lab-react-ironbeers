import image from "../assets/random-beer.png";
import Navbar from "./Navbar";

export default function RandomBeer() {
  return (
    <div>
      <Navbar />
      <img src={image} alt="random-beer" />
      <h1>Random Beer</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor
        lorem, volutpat dignissim lacus sed, posuere lacinia lacus. Quisque
        posuere sapien elementum mollis ultrices. Ut non molestie sem. Morbi
        aliquet ante sit amet odio fringilla efficitur eget quis leo.
        Pellentesque sit amet tristique diam.
      </p>
    </div>
  );
}
