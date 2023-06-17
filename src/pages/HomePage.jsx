import MainCard from "../components/MainCard";
import BeersImage from "../assets/beers.png";
import NewBeerImage from "../assets/new-beer.png";
import RandomBeerImage from "../assets/random-beer.png";
const sampleParagraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor lorem, volutpat dignissim lacus sed, posuere lacinia lacus. Quisque posuere sapien elementum mollis ultrices. Ut non molestie sem.";

export default function HomePage() {
  return (
    <div>
      <MainCard
        Image={BeersImage}
        Title="Beers"
        Link="/beers"
        Paragraph={sampleParagraph}
      />
      <MainCard
        Image={NewBeerImage}
        Title="New Beer"
        Link="/new-beer"
        Paragraph={sampleParagraph}
      />
      <MainCard
        Image={RandomBeerImage}
        Title="Random Beer"
        Link="/random-beer"
        Paragraph={sampleParagraph}
      />
    </div>
  );
}
