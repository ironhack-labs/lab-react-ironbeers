import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class sectionMenu extends Component {
  state = {
    sections: [
      {
        link : '/beers',
        title: 'All Beers',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Minima nesciunt ipsam excepturi voluptates id, iure voluptate et inventore esse assumenda sapiente ut placeat mollitia quidem perferendis quos maxime dignissimos.Est!',
        img: '',

      },
      {
        link : '/random-beer',
        title: 'Random Beer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Minima nesciunt ipsam excepturi voluptates id, iure voluptate et inventore esse assumenda sapiente ut placeat mollitia quidem perferendis quos maxime dignissimos.Est!',
        img: ''
      },
      {
        link : '/new-beer',
        title: 'New Beer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Minima nesciunt ipsam excepturi voluptates id, iure voluptate et inventore esse assumenda sapiente ut placeat mollitia quidem perferendis quos maxime dignissimos.Est!',
        img: ''
      }
    ]
  }


  render() {
    let sectionMenu = this.state.sections.map((section,i) => {
      return (
        <li key={i}>
          <Link to={section.link}>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
          </Link>
        </li>
      )
    })

    return (
      <React.Fragment>
        <section>
          <ul>
            {sectionMenu}
          </ul>
        </section>
      </React.Fragment>
    )
  }
}
