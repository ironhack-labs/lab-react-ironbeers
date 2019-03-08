import React from 'react'
import {Link} from "react-router-dom"


const Home =() =>{
    return(
        <div className="container">
        <div className="card">
        <img className="card-img-top" src="https://www.rockandpop.cl/wp-content/uploads/2018/11/cervezas.jpg" alt="Card" />
        <div className="card-body">
          <h4 className="card-title">All Beer</h4>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quae officiis tempora expedita fuga quaerat soluta. Minima magni, saepe nulla soluta voluptatem reprehenderit neque molestiae deleniti dolorum id. Dignissimos, accusantium.
          </p>
          <Link to='/beer' className="btn btn-primary">
           All Beer
          </Link>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WKK8KwCROps-xCv9_wFZx167YyD41DIKSWWn_H8FtA-sX-IgzQ" alt="Card" />
        <div className="card-body">
          <h4 className="card-title">Random</h4>
          <p className="card-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae obcaecati, perferendis sed, magni dolorem deserunt laudantium cumque possimus laborum eveniet officiis quasi hic eum non expedita eligendi sunt. Non, explicabo?
            
          </p>
          <Link to='/random' className="btn btn-primary">
           Random
          </Link>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhR1vXWOlrEhxC_Ewq3wMNRZwsQ3vudQQ9ziuu06oBtU8cXoGt" alt="Card " />
        <div className="card-body">
          <h4 className="card-title">New Beer</h4>
          <p className="card-text">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat architecto commodi nobis eveniet dignissimos, harum consectetur tempora corporis hic dolorum maiores dolor. Officia odio totam reiciendis rerum ipsam adipisci temporibus!
          </p>
          <Link to='/addbeer' className="btn btn-primary">
            Add Beer
          </Link>
        </div>
      </div>
      </div>
    )
}


export default Home;

