import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeersImg from "../assets/random-beer.png";

const beers = [
  {
    img: beersImg,
    title: "All Beers",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    link: "/beers",
  },
  {
    img: randomBeersImg,
    title: "Random Beer",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    link: "/random-beer",
  },
  {
    img: newBeerImg,
    title: "New Beer",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    link: "/new-beer",
  },
];

export default beers;
