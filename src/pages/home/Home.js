import React from 'react';
import { Card } from 'antd';
import { useHistory } from 'react-router-dom';

const { Meta } = Card;

const Home = () => {
    const history = useHistory();
    return (
        <div>
            <Card hoverable onClick={() => history.push('/beers')}>
                <Meta title="All beers" description="Find here all the beers we have!" />
            </Card>
            <Card hoverable onClick={() => history.push('/random-beer')}>
                <Meta title="Random beer" description="Let us surprise you." />
            </Card>
            <Card hoverable onClick={() => history.push('/new-beer')}>
                <Meta title="New beer" description="Create your own beer!" />
            </Card>
        </div>
    );
}

export default Home;