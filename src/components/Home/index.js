import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<div>
				<div>
					<NavLink className="text-dark" exact to="/beers">
						<img src="/images/beers.png" className="img-fluid" alt="Beer" />
						<h2>All beers</h2>
					</NavLink>
					<p className="text-muted">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
						metus mauris. Nunc bibendum elit vitae urna dapibus, eget dapibus
						felis pharetra. Morbi in ligula vitae nulla tempor sagittis eu et
						orci. Sed quis quam tortor. Quisque ornare efficitur pellentesque.
						Nulla aliquet placerat nibh, molestie congue nibh aliquet sit amet.
						Fusce a lacinia ex. Nam consequat, ante at ultrices ultricies, ante
						dolor suscipit metus, et sollicitudin nisl diam a nisi. Nullam
						dignissim, risus at eleifend sollicitudin, purus erat fringilla
						dolor, eget vehicula erat tortor id leo. Suspendisse sagittis luctus
						scelerisque. Sed non tincidunt nunc, vitae pulvinar elit. Duis
						posuere mauris sed urna porttitor vehicula. Nunc ac orci eget justo
						auctor suscipit vel in mauris. Vivamus justo ipsum, malesuada at
						faucibus eget, suscipit sit amet dolor. Sed at aliquam velit. Donec
						lobortis ultricies urna, a interdum nulla suscipit ac.
					</p>
				</div>
				<div>
					<NavLink className="text-dark" exact to="/random-beer">
						<img
							src="/images/random-beer.png"
							className="img-fluid"
							alt="Beer"
						/>
						<h2>Random Beer</h2>
					</NavLink>
					<p className="text-muted">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
						metus mauris. Nunc bibendum elit vitae urna dapibus, eget dapibus
						felis pharetra. Morbi in ligula vitae nulla tempor sagittis eu et
						orci. Sed quis quam tortor. Quisque ornare efficitur pellentesque.
						Nulla aliquet placerat nibh, molestie congue nibh aliquet sit amet.
						Fusce a lacinia ex. Nam consequat, ante at ultrices ultricies, ante
						dolor suscipit metus, et sollicitudin nisl diam a nisi. Nullam
						dignissim, risus at eleifend sollicitudin, purus erat fringilla
						dolor, eget vehicula erat tortor id leo. Suspendisse sagittis luctus
						scelerisque. Sed non tincidunt nunc, vitae pulvinar elit. Duis
						posuere mauris sed urna porttitor vehicula. Nunc ac orci eget justo
						auctor suscipit vel in mauris. Vivamus justo ipsum, malesuada at
						faucibus eget, suscipit sit amet dolor. Sed at aliquam velit. Donec
						lobortis ultricies urna, a interdum nulla suscipit ac.
					</p>
				</div>
				<div>
					<NavLink className="text-dark" exact to="/new-beer">
						<img src="/images/new-beer.png" className="img-fluid" alt="Beer" />
						<h2>New Beer</h2>
					</NavLink>
					<p className="text-muted">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
						metus mauris. Nunc bibendum elit vitae urna dapibus, eget dapibus
						felis pharetra. Morbi in ligula vitae nulla tempor sagittis eu et
						orci. Sed quis quam tortor. Quisque ornare efficitur pellentesque.
						Nulla aliquet placerat nibh, molestie congue nibh aliquet sit amet.
						Fusce a lacinia ex. Nam consequat, ante at ultrices ultricies, ante
						dolor suscipit metus, et sollicitudin nisl diam a nisi. Nullam
						dignissim, risus at eleifend sollicitudin, purus erat fringilla
						dolor, eget vehicula erat tortor id leo. Suspendisse sagittis luctus
						scelerisque. Sed non tincidunt nunc, vitae pulvinar elit. Duis
						posuere mauris sed urna porttitor vehicula. Nunc ac orci eget justo
						auctor suscipit vel in mauris. Vivamus justo ipsum, malesuada at
						faucibus eget, suscipit sit amet dolor. Sed at aliquam velit. Donec
						lobortis ultricies urna, a interdum nulla suscipit ac.
					</p>
				</div>
			</div>
		);
	}
}
