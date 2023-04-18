import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<div className='homepage-menu'>
			<Link to='/beers'>
				<div className='container-fluid d-flex flex-column'>
					<img src='./beers.png' alt='beers' />
					<div className='px-3 pt-1 pb-3'>
						<h1>All Beers</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum voluptates voluptatum, officia, eius
							dolore error quibusdam facere atque quidem
						</p>
					</div>
				</div>
			</Link>
			<Link to='/random-beer'>
				{' '}
				<div className='container-fluid d-flex flex-column'>
					<img src='./random-beer.png' alt='beers' />
					<div className='px-3 pt-1 pb-3'>
						<h1>Random Beer</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum voluptates voluptatum, officia, eius
							dolore error quibusdam facere atque quidem
						</p>
					</div>
				</div>
			</Link>
			<Link to='/new-beer'>
				{' '}
				<div className='container-fluid d-flex flex-column'>
					<img src='./new-beer.png' alt='beers' />
					<div className='px-3 pt-1 pb-3'>
						<h1>New Beer</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum voluptates voluptatum, officia, eius
							dolore error quibusdam facere atque quidem
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default HomePage;
