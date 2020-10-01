import React from 'react'

// React Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

// Custom Components
import IndexCard from './IndexCard'

export default () => {
    return (
        <Container>
                <Row>
                    <IndexCard title='All Beers' url='beers' image='https://cdn3.vectorstock.com/i/1000x1000/30/77/beer-delivery-logo-icon-design-vector-22483077.jpg' />
                    <IndexCard title='Random Beer' url='/random-beer' image='https://cdn4.vectorstock.com/i/1000x1000/52/38/speed-beer-logo-icon-design-vector-22545238.jpg' />
                    <IndexCard title='New Beer' url='/new-beer' image='https://cdn2.vectorstock.com/i/1000x1000/04/31/fresh-light-beer-glass-with-white-foam-logo-on-vector-13280431.jpg' />
                </Row>
        </Container>
    )
}
