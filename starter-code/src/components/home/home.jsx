import React from 'react';
import './home.scss';
import { Link } from 'react-router-dom';

const HomeSection = ({photo, title, text, link}) => {
	return (
		<Link className={'section'} to={link}>
			<div className={'img'} style={{backgroundImage: `url(${photo})`}}/>
			<h2>{title}</h2>
			<p>{text}</p>
		</Link>
	)
};


export const Home = () => {
	const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae bibendum urna. Aliquam scelerisque vestibulum eros. Suspendisse consectetur placerat dolor eleifend rhoncus.';

	return (
		<div className={'home'}>
			<HomeSection link={'/beers'} photo={'./images/beers.png'} title={'All Beers'} text={lorem}/>
			<HomeSection link={'/random-beer'} photo={'./images/random-beer.png'} title={'Random Beer'} text={lorem}/>
			<HomeSection link={'/new-beer'} photo={'./images/new-beer.png'} title={'New Beer'} text={lorem}/>
		</div>
	)
};