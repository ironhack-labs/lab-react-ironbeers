import React from 'react'
import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <div style ={{width: '100vh', height:'250px'}} id="homePage">
      <Link className="homeLink" to="/beers">
        <img src="https://www.excelenciasgourmet.com/sites/default/files/styles/slideshow_large/public/2020-04/Cervezas.jpg" alt="All Beers" />
        <h2>All Beers</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. 
        </p>
      </Link>
      <Link className="homeLink" to="/random-beer">
        <img src="https://www.gannett-cdn.com/-mm-/ac688eec997d2fce10372bf71657297ff863814d/c=171-0-1195-768/local/-/media/2018/10/09/USATODAY/usatsports/247WallSt.com-247WS-497973-beer-cover-photo-1.jpg" alt="Random Beer" />
        <h2>Random Beer</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. 
        </p>
      </Link>
      <Link className="homeLink" to="/new-beer">
        <img src="https://thumbnails.texastribune.org/0hE9j01380xyFaoKPOdT2enHNZ4=/1200x804/smart/filters:quality(95)/static.texastribune.org/media/files/ad5ab7b80fc5f2bd06df97dde9a096d4/01%20Beer%20to%20go%20SF%20TT.jpg" alt="New Beer" />
        <h2>New Beer</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. 
        </p>
      </Link>
    </div>
  )
}
