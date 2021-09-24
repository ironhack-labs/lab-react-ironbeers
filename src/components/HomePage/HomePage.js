import React from 'react'
import { Container } from 'react-bootstrap'
import image0ne from './../../assets/beers.png'
import imageTwo from './../../assets/new-beer.png'
import imageThree from './../../assets/random-beer.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom'


export default function HomePage() {
  return (
    <Container>
      <Link to="/beers">
      <div>
        <img src={image0ne} alt={image0ne} />
        <h3>All beers</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse hic consequatur, animi fuga aperiam provident nobis asperiores sunt dicta tempora voluptatibus itaque! Deleniti iusto voluptas repellendus quas, repellat iste rerum.</p>
      </div>
      </Link>
      <Link to="/random-beers">
      <div>
        <img src={imageTwo} alt={imageTwo} />
        <h3>Random Beer</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum aperiam, voluptas voluptates velit ea molestiae veritatis magni explicabo labore, sapiente unde soluta porro fugit facilis officia atque consequatur similique non!</p>
      </div>
      </Link>
      <Link to="/new-beers">
      <div>
        <img src={imageThree} alt={imageThree} />
        <h3>New Beer</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, pariatur? Reprehenderit nobis ipsum iusto voluptate officia expedita placeat repudiandae repellendus harum est sunt, quidem nemo maiores exercitationem fugiat eum corrupti?</p>
      </div>
      </Link>
    </Container>
  )
}
