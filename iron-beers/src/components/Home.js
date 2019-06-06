import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <div>
        <article className="home-card">
          <img src="/img/beers.png" alt="beers" />
          <Link to="/beers">
            <h2>All the Beers</h2>
          </Link>
          <p>Bacon ipsum dolor amet pork loin strip steak prosciutto capicola, doner chuck picanha salami pork belly cow sirloin pastrami pig. Shank kielbasa picanha pig hamburger frankfurter pork ham hock short loin drumstick spare ribs. Swine pancetta picanha turducken t-bone cupim doner frankfurter sausage. Alcatra doner tri-tip, tongue sausage chuck ribeye. Chicken pork ball tip spare ribs ribeye. Ham hock strip steak landjaeger meatball ball tip short ribs.</p>
        </article>
        <article className="home-card">
          <img src="/img/random-beer.png" alt="beers" />
          <Link to="/new-beer">
            <h2>New Beers</h2>
          </Link>
          <p>Short ribs landjaeger short loin brisket turducken fatback ribeye hamburger tongue doner swine salami bresaola. Chuck meatball sirloin pancetta shankle, ham hock capicola ground round rump filet mignon. Shank pork pork loin pancetta hamburger porchetta, flank tongue drumstick t-bone. Tail spare ribs pork belly, buffalo andouille kielbasa beef pig shoulder drumstick chuck.</p>
        </article>        <article className="home-card">
          <img src="/img/new-beer.png" alt="beers" />
          <Link to="/random-beer">
            <h2>Random Beer</h2>
          </Link>
          <p>Drumstick kevin t-bone ball tip swine. Biltong shoulder pancetta tail pork belly leberkas shank frankfurter bresaola spare ribs. Meatloaf porchetta shoulder, ground round leberkas short ribs tongue kielbasa bacon ball tip rump pancetta pastrami andouille beef. Corned beef t-bone biltong doner drumstick, kielbasa andouille swine pork porchetta turkey capicola turducken.</p>
        </article>
      </div>
    )
  }
}

export default Home
