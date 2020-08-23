import React from 'react';
import HomeLink from './HomeLink';
import {Link} from 'react-router-dom';

export default function Home(props) {

    let linksArr = [
        {
            name: 'All Beers',
            imgSrc: 'https://wszvaqua.nl/media/com_eventbooking/images/Craft-Beer.jpg',
            route: '/beers',
        },
        {
            name: 'Random Beer',
            imgSrc: 'https://media-cdn.tripadvisor.com/media/photo-s/15/1d/3b/ab/local-craft-beers.jpg',
            route: '/random-beer',
        },
        {
            name: 'New Beer',
            imgSrc: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/irZRgc2Ophto/v0/1000x-1.jpg',
            route: '/new-beer',
        },
    ]

    return (
        <div>
            {
                linksArr.map((link, i) => {
                    return <Link key={'link' + i} className="home-link" to={link.route}><HomeLink link={link}/></Link>
                })
            }
        </div>
    )
}
