import image from "../assets/new-beer.png";
import Navbar from "./Navbar";

export default function NewBeer() {
  return (
    <div>
      <Navbar />
      <img src={image} alt="newBeer" />
      <h1>All beers</h1>
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
