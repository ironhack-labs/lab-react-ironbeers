import React from "react";
import { SectionCol } from "../components/ColHomeContain";
import imgBeers from "../../public/images/beers.png";
import imgRandomBeer from "../../public/images/random-beer.png";
import imgNewBeer from "../../public/images/new-beer.png";

export const HomePage = () => {
  return (
    <div>
      <>
        <SectionCol
          linkSectionTo="/beers"
          srcSection={imgBeers}
          titleSection="ALL BEERS"
          descrittionSection="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum urna ac molestie commodo. Maecenas sollicitudin augue facilisis, sollicitudin tortor id, dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu nibh ultricies, venenatis ex vel, feugiat ex. Morbi volutpat varius tempus. Suspendisse auctor nisl eu lacus fringilla lacinia. Phasellus sodales purus quam, pulvinar sagittis ipsum venenatis at."
        />
        <SectionCol
          linkSectionTo="/random-beer"
          srcSection={imgRandomBeer}
          titleSection="Random Beer"
          descrittionSection="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum urna ac molestie commodo. Maecenas sollicitudin augue facilisis, sollicitudin tortor id, dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu nibh ultricies, venenatis ex vel, feugiat ex. Morbi volutpat varius tempus. Suspendisse auctor nisl eu lacus fringilla lacinia. Phasellus sodales purus quam, pulvinar sagittis ipsum venenatis at."
        />
        <SectionCol
          linkSectionTo="/new-beer"
          srcSection={imgNewBeer}
          titleSection="New Beer"
          descrittionSection="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum urna ac molestie commodo. Maecenas sollicitudin augue facilisis, sollicitudin tortor id, dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu nibh ultricies, venenatis ex vel, feugiat ex. Morbi volutpat varius tempus. Suspendisse auctor nisl eu lacus fringilla lacinia. Phasellus sodales purus quam, pulvinar sagittis ipsum venenatis at."
        />
      </>
    </div>
  );
};
