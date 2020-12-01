import React from 'react'
import { Link } from 'react-router-dom'
// import Nav from './Nav';

const Home = () => {
    return (
        <div className='home' style={{ width: '500px' }}>

            <div className='all-beer'>
                <Link to='/allbeers'>
                    <img src="https://www.pahotel.com.au/wp-content/uploads/2018/03/Ipswich-Craft-Beer-Bar-and-Restaurant.jpg" style={{ width: '500px' }} alt='all-beers' />
                    <h1> All Beers</h1></Link>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent volutpat non purus in tincidunt. Etiam suscipit vitae ante sit amet rutrum.
                Mauris egestas consequat massa eget aliquam.
                    </p>
            </div>

            <div className='random-beer'>
                <Link to='/randombeer'>
                    <img src="https://cdn.vox-cdn.com/thumbor/JfaZhCcL0T_B0-ZCYUdIyfs1t_g=/0x0:1000x634/1200x900/filters:focal(420x237:580x397)/cdn.vox-cdn.com/uploads/chorus_image/image/60123291/image_asset.12.png"
                        style={{ width: '500px' }} alt='random-beers' />
                    <h1> Random Beer</h1></Link>
                <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent volutpat non purus in tincidunt. Etiam suscipit vitae ante sit amet rutrum.
                Mauris egestas consequat massa eget aliquam.
                    </p>
            </div>

            <div className='new-beer'>
                <Link to='/newbeer'>
                    <img src="https://dubhlinnpub.com/wp-content/uploads/2016/06/Dubh-Linn-Irish-Pub-Duluth-Brewry-Beer-FILLER2.jpg" style={{ width: '500px' }} alt='new-beers' />
                    <h1> New Beer</h1></Link>
                <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent volutpat non purus in tincidunt. Etiam suscipit vitae ante sit amet rutrum.
                Mauris egestas consequat massa eget aliquam.
                    </p>
            </div>

        </div>
    )
}

export default Home;