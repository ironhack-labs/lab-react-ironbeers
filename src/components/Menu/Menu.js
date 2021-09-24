import React from 'react';
//Main css
import './Menu.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
//React router dom
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<Link to="/">
			<div className="headerMenu">
				<i className="fa fa-home bigHomeI" />
			</div>
		</Link>
	);
};

export default Menu;
