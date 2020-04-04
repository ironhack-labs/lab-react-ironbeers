import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<div className={'header'}>
			<Link to={'/home'}>
				<i className="fas fa-home"/>
			</Link>
		</div>
	)
};