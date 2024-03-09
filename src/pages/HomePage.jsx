import React from 'react'
import HomePageBox from '../components/HomePageBox';
import beersImg from '../assets/beers.png';
import newBeerImg from '../assets/new-beer.png';
import randBeerImg from '../assets/random-beer.png'


export default function HomePage() {
  const infoBoxes = [
    {
        toLink: "/beers",
        title: "All Beers",
        img: beersImg,
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem nulla, sollicitudin sit amet venenatis a, efficitur sit amet tellus. Phasellus dictum odio erat, nec commodo nisl ullamcorper eget. Maecenas nibh diam, accumsan vitae libero eget, egestas fermentum purus. Quisque sit amet porta nunc, ut lobortis orci. Nam enim nibh, consectetur vel molestie non, pulvinar sed lacus. Fusce consectetur laoreet felis, eu ullamcorper sem. Curabitur quis felis at ante fermentum euismod in a ex. Phasellus rhoncus, nulla non blandit ornare, eros mauris tincidunt orci, non facilisis tellus elit sed sapien. Fusce vel fermentum nisi. Vestibulum interdum massa arcu, sed aliquam dui vehicula eget."
    },
    {
        toLink: "/random-beer",
        title: "Random Beer",
        img: newBeerImg,
        paragraph: "Maecenas quis accumsan elit. Suspendisse vitae sagittis nisi. Nunc eget nulla sit amet diam malesuada ornare. Ut tincidunt, turpis at cursus facilisis, odio nibh vehicula lectus, ac pharetra dui est sed nulla. Duis sed aliquet diam. Donec tempus mollis nibh sit amet porttitor. Donec lectus libero, varius non ligula vitae, porttitor scelerisque nisi. Ut egestas eros justo, quis condimentum arcu consequat at. Mauris quam libero, euismod ornare euismod ut, ultrices ut nisl. Duis et sem et lorem consequat posuere. Curabitur fringilla nisl et felis iaculis pretium. Maecenas posuere, erat ut cursus dignissim, orci ex sollicitudin mi, eu convallis velit elit sit amet mi."
    },
    {
        toLink: "/new-beer",
        title: "New Beer",
        img: randBeerImg,
        paragraph: "Integer pretium in ante et iaculis. Donec vel quam elementum, vehicula dui et, malesuada sem. Vestibulum tincidunt dui eget enim ultricies, vitae placerat felis faucibus. Quisque in tristique ligula. Quisque commodo dignissim leo, et porttitor enim convallis vitae. Praesent sit amet consequat libero. Sed dignissim vehicula turpis, vitae faucibus mi mollis id. Nulla dolor massa, tincidunt non porttitor at, luctus ut ex. Mauris quis elit mi. Nam venenatis dolor vitae felis dapibus scelerisque. Duis vulputate elit nibh, non cursus nisl hendrerit sed. Aenean feugiat, ex hendrerit hendrerit volutpat, ex nisi semper ligula, in euismod velit neque nec tellus. Duis imperdiet ullamcorper massa nec congue. Sed non ornare justo."
    }
  ]

  const displayInfoBox = () => {
    return infoBoxes.map((box, i) => {
        return <HomePageBox {...box} key={i}/>
    })
  }

  return (
    <div className="home-page">
      {displayInfoBox()}
    </div>
  )
}

