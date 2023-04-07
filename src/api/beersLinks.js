import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeersImg from "../assets/random-beer.png";

const beers = [
  {
    img: beersImg,
    title: "All Beers",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    link: "/beers",
  },
  {
    img: randomBeersImg,
    title: "Random Beer",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    link: "/random-beer",
  },
  {
    img: newBeerImg,
    title: "New Beer",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    link: "/new-beer",
  },
];

export default beers;
