import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to="/beers" className="link">
          <img src="/assets/beers.png" alt="" />
          <h1>All Beer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
            ex molestias? Aliquam porro ipsa temporibus eligendi fugiat optio
            dolore sequi incidunt pariatur. Fugiat id ipsum nam architecto esse
            nobis sed. Porro modi culpa, minima, voluptatem ducimus amet fuga
            magni nostrum excepturi eos distinctio, quia aperiam ut eius
            quibusdam quod. Amet error maxime, molestias illo magni quasi alias
            dolor itaque autem.
          </p>
        </Link>
        <Link to="/random-beer" className="link">
          <img src="/assets/random-beer.png" alt="" />
          <h1>Random Beer</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
            possimus! Blanditiis, non laborum optio omnis recusandae nobis
            quidem amet dicta odit obcaecati dolore id veniam molestias. Sed
            assumenda quibusdam maiores! Tempora minima iste aut. Dolor
            assumenda quod facere placeat provident laudantium voluptates ad
            doloremque, pariatur explicabo temporibus esse animi ullam, enim
            minima? Cumque nostrum modi ea delectus similique id aliquam?
            Dolorem doloribus praesentium, maiores deleniti distinctio in
            aperiam saepe blanditiis hic quisquam. Tenetur saepe labore id atque
            recusandae voluptatum repellendus voluptas. Ad unde officiis alias
            aliquid nobis iusto at eligendi.
          </p>
        </Link>
        <Link to="/new-beer" className="link">
          <img src="/assets/new-beer.png" alt="" />
          <h1>New Beer</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            commodi dolorem expedita laudantium laboriosam a, labore accusantium
            optio molestias soluta illum delectus voluptas incidunt natus alias
            deserunt, qui fugiat. Error dicta accusantium, ipsam sit et
            necessitatibus corporis corrupti neque sequi minima voluptates
            beatae iure libero dolorum architecto qui? Eveniet laudantium
            repellat porro, cumque debitis quos voluptatum molestias quo amet
            magnam aut veniam sunt labore earum, sit nam enim deleniti
            distinctio iusto molestiae! Sapiente, eius laudantium at ullam ex
            vitae non laboriosam vero.
          </p>
        </Link>
      </div>
    );
  }
}

export default HomePage;
