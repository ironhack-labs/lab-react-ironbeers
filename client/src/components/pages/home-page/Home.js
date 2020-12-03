import PageCard from './PageCard'

import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container>
        <PageCard path='/beers' title='All Beers'
          image='https://images.unsplash.com/photo-1507310951869-fe0941df4dbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
          description='When you see a pathetic Octoberfest, it means that the bullfrog brew for the rattlesnake wakes up. The Avery IPA toward a bottle tries to seduce a St. Pauli Girl. Now and then, the Pilsner seldom can be kind to some line dancer behind a Long Trail Ale. When you see an optimal Rolling Rock, it means that a micro brew gets stinking drunk. Indeed, a tornado brew toward a Sam Adams gives a stink finger to a Red Stripe.'
        />
        <PageCard path='/random-beer' title='Random Beer'
          image='https://images.unsplash.com/photo-1457382713369-161d1d986f54?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80'
          description='When you see a pathetic Octoberfest, it means that the bullfrog brew for the rattlesnake wakes up. The Avery IPA toward a bottle tries to seduce a St. Pauli Girl. Now and then, the Pilsner seldom can be kind to some line dancer behind a Long Trail Ale. When you see an optimal Rolling Rock, it means that a micro brew gets stinking drunk. Indeed, a tornado brew toward a Sam Adams gives a stink finger to a Red Stripe.'
        />
        <PageCard path='/new-beer' title='New Beer'
          image='https://images.unsplash.com/photo-1542835497-a6813df96ed9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80'
          description='When you see a pathetic Octoberfest, it means that the bullfrog brew for the rattlesnake wakes up. The Avery IPA toward a bottle tries to seduce a St. Pauli Girl. Now and then, the Pilsner seldom can be kind to some line dancer behind a Long Trail Ale. When you see an optimal Rolling Rock, it means that a micro brew gets stinking drunk. Indeed, a tornado brew toward a Sam Adams gives a stink finger to a Red Stripe.'
        />
    </Container>
  )
}

export default Home