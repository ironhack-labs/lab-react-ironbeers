import beers from "../../assets/beers.png";
import randomBeer from "../../assets/random-beer.png";
import newBeer from "../../assets/new-beer.png";

const homeData = [
    {
        path: "/beers",
        image: beers,
        title: "All Beers",
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id sapien nibh. Maecenas ex est,
        varius non lectus nec, iaculis imperdiet neque. Aenean ut mauris.`
    },
    {
        path: "/random-beer",
        image: randomBeer,
        title: "Random Beer",
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper posuere lectus. Vivamus
        venenatis ex sapien, vitae aliquam dolor pellentesque quis. Etiam mollis lorem nec.`
    },
    {
        path: "/new-beer",
        image: newBeer,
        title: "New Beer",
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id risus commodo, laoreet
        dolor ut, varius lacus. Sed ac luctus urna. Duis ac velit varius.`
    }
];

export default homeData;