import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div>
        <img src="./src/assets/beers.png" />
        <Link to={"/beers"}>All Beers</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum nunc non purus dictum, sit amet sodales elit venenatis. Cras facilisis arcu vel massa maximus, vitae pharetra metus imperdiet. Pellentesque ac tempor sem. Nulla scelerisque faucibus elementum. Aenean ultricies volutpat quam, vulputate condimentum mi sollicitudin nec. Donec at consectetur erat. Nunc quis metus pulvinar, eleifend lorem a, maximus ante. Proin vel nulla dapibus, egestas lorem at, semper ex. Fusce tellus dui, egestas vel accumsan sed, blandit interdum leo. Ut blandit at nibh a malesuada. Nam pulvinar odio in ultricies molestie. Donec dolor dui, placerat at pellentesque vel, rutrum ac odio. Sed sit amet metus dui. Sed non arcu in sapien porttitor malesuada id quis odio. Duis ut aliquet nisl.</p>
      </div>
      <div>
        <img src="./src/assets/random-beer.png" />
        <Link to={"/random-beer"}>Random Beer</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum nunc non purus dictum, sit amet sodales elit venenatis. Cras facilisis arcu vel massa maximus, vitae pharetra metus imperdiet. Pellentesque ac tempor sem. Nulla scelerisque faucibus elementum. Aenean ultricies volutpat quam, vulputate condimentum mi sollicitudin nec. Donec at consectetur erat. Nunc quis metus pulvinar, eleifend lorem a, maximus ante. Proin vel nulla dapibus, egestas lorem at, semper ex. Fusce tellus dui, egestas vel accumsan sed, blandit interdum leo. Ut blandit at nibh a malesuada. Nam pulvinar odio in ultricies molestie. Donec dolor dui, placerat at pellentesque vel, rutrum ac odio. Sed sit amet metus dui. Sed non arcu in sapien porttitor malesuada id quis odio. Duis ut aliquet nisl.</p>
      </div>

      <div>
        <img src="./src/assets/new-beer.png" alt="" />
        <Link to={"/new-beer"}>New Beer</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum nunc non purus dictum, sit amet sodales elit venenatis. Cras facilisis arcu vel massa maximus, vitae pharetra metus imperdiet. Pellentesque ac tempor sem. Nulla scelerisque faucibus elementum. Aenean ultricies volutpat quam, vulputate condimentum mi sollicitudin nec. Donec at consectetur erat. Nunc quis metus pulvinar, eleifend lorem a, maximus ante. Proin vel nulla dapibus, egestas lorem at, semper ex. Fusce tellus dui, egestas vel accumsan sed, blandit interdum leo. Ut blandit at nibh a malesuada. Nam pulvinar odio in ultricies molestie. Donec dolor dui, placerat at pellentesque vel, rutrum ac odio. Sed sit amet metus dui. Sed non arcu in sapien porttitor malesuada id quis odio. Duis ut aliquet nisl.</p>
      </div>
    </div>
  );
}

export default HomePage;
