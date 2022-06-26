import React from "react";
import Beers from "../assets/beers.png";
import Beers2 from "../assets/new-beer.png";
import Beers3 from "../assets/random-beer.png";

const home = () => {
  return (
    <div>
      <img src={Beers}></img>
      <h2>All Beers</h2>
      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </p>
      <img src={Beers3}></img>
      <h2>Random Beers</h2>
      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </p>
      <img src={Beers2}></img>

      <h2>New Beer</h2>
      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </p>
    </div>
  );
};

export default home;
