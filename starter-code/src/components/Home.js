import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const Home = () => (
  <Content style={{ padding: '20px 50px' }}>
    <div className="section">
      <div>
        <Link to="/beers">
          <img src="/images/beers.png" alt="Beers" />
        </Link>
      </div>
      <h2>All beers</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatibus quisquam ipsa et vel nisi pariatur
        iusto quae expedita dolorem quos dolores, eius id, recusandae possimus vitae! Facilis, odio soluta?
      </p>
    </div>
    <div className="section">
      <div>
        <Link to="/beers/random">
          <img src="/images/random-beer.png" alt="Random beer" />
        </Link>
      </div>
      <h2>Random beer</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit pariatur dolores deleniti nihil molestiae ipsa
        repudiandae impedit enim, optio, nobis necessitatibus amet illum. Optio itaque delectus laboriosam, sed nam
        quas.
      </p>
    </div>
    <div className="section">
      <div>
        <Link to="/new-beer">
          <img src="/images/new-beer.png" alt="New beer" />
        </Link>
      </div>

      <h2>Add new beer</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore voluptatum ea velit impedit numquam tempore
        sunt dolorum corrupti est ducimus odio, blanditiis iusto provident ut suscipit laboriosam, reiciendis molestiae
        libero.
      </p>
    </div>
  </Content>
);

export default Home;
