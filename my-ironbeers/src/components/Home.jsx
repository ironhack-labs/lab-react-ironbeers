import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
	// state = {
	// 	beers: [ ...API ]
	// };

	render() {
		return (
			<div className="home-container">
				<div className="menu-3">
					<div className="menu-img">
						<img src="https://farm8.staticflickr.com/7040/6970866459_4bbf35ecdb_b.jpg" alt="beer" />
					</div>
					<div className="link">
						<Link style={{ textDecoration: 'none', color: 'black' }} to="/beers">
							All Beers
						</Link>
					</div>
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cupiditate ea obcaecati
							quaerat numquam voluptatibus vitae sapiente, iure ad cumque? Qui at dolorem expedita tempore
							vel incidunt velit vitae porro.
						</p>
					</div>
				</div>
				<div className="menu-3">
					<div className="menu-img">
						<img src="https://farm8.staticflickr.com/7040/6970866459_4bbf35ecdb_b.jpg" alt="beer" />
					</div>
					<div className="link">
						<Link style={{ textDecoration: 'none', color: 'black' }} to="/new-beer">
							New Beer
						</Link>
					</div>
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cupiditate ea obcaecati
							quaerat numquam voluptatibus vitae sapiente, iure ad cumque? Qui at dolorem expedita tempore
							vel incidunt velit vitae porro.
						</p>
					</div>
				</div>
				<div className="menu-3">
					<div className="menu-img">
						<img src="https://farm8.staticflickr.com/7040/6970866459_4bbf35ecdb_b.jpg" alt="beer" />
					</div>
					<div className="link">
						<Link style={{ textDecoration: 'none', color: 'black' }} to="/random-beer">
							Random Beer
						</Link>
					</div>
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cupiditate ea obcaecati
							quaerat numquam voluptatibus vitae sapiente, iure ad cumque? Qui at dolorem expedita tempore
							vel incidunt velit vitae porro.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
