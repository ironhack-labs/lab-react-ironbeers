import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class HomePage extends Component {

  render() {
    return(
      <React.Fragment>
        <div className="card">
          <img src="https://www.businesstodaync.com/wp-content/uploads/2017/05/image.jpg" alt="all-beers" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">Todas las cheves</h5>
            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis ullam explicabo ipsam odit earum itaque unde eum dolore iusto optio quasi perspiciatis, error delectus quam minus ducimus quae alias maxime.</p>
            <Link to='/beers' className="btn btn-outline-primary">All Beers</Link>
          </div>
        </div>
        <div className="card">
          <img src="https://www.businesstodaync.com/wp-content/uploads/2017/05/image.jpg" alt="random-beer" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">Cheve Random</h5>
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem soluta saepe maiores quibusdam recusandae facilis assumenda quisquam illum vel suscipit adipisci dignissimos rerum asperiores, voluptates corporis reiciendis dolorum aut nostrum!</p>
            <Link to='/random-beer' className="btn btn-outline-primary">Random Beer</Link>
          </div>
        </div>
        <div className="card">
          <img src="https://www.businesstodaync.com/wp-content/uploads/2017/05/image.jpg" alt="add-beer" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">Nueva cheve</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime, molestiae est, maiores nemo sapiente autem explicabo animi eveniet fuga nulla necessitatibus. Ipsum ducimus architecto provident hic maiores praesentium id!</p>
            <Link to='/new-beer' className="btn btn-outline-primary">New Beer</Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default HomePage