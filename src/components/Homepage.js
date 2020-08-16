import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import OptionCard from './OptionCard';

const Homepage = () => {

    //IT-1, 10.2
    const options = [
        {
            link: '/beers',
            image: 'https://alestreetnews.com/wp-content/uploads/2019/11/2500beeronthewall.jpg',
            title: 'All our beers!',
            description: 'Check all our beers'
        },
        {
            link: '/random-beer',
            image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/iguassu/277Craft-Beer_09-5c40b6d25056a36_5c40b7f2-5056-a36a-09bb7d21310a46f7.jpg',
            title: 'Random beer',
            description: 'Which beer will you find?'
        },
        {
            link: '/new-beer',
            image: 'https://media.gizmodo.co.uk/wp-content/uploads/2016/07/zems0k6r4nmtcuuavzh8.jpg',
            title: 'New beer!',
            description: 'Create your own beer'
        },

    ];

    //IT-1, 12.1
    const optionList = options.map((opt, index) => (
        <OptionCard
        key={index}
        link={opt.link}
        image={opt.image}
        title={opt.title}
        description={opt.description}
        />
    ))
    // IT-1, 12.2
    return (
        <Container>
            <Row>
                <Col className='card-display' lg={12}>{optionList}</Col>
            </Row>
        </Container>
    )
}

export default Homepage
