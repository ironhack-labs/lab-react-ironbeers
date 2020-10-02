import React from 'react'
import { Link } from 'react-router-dom'

import './Index.css'


export default () => {
    return (

        <main className='home'>

            <h1>What are you thirsty to?</h1>

            <div className='row'>

                <article className='col-md-4'>

                    <Link to='/beers'>

                        <div className='content'>

                            <img src='https://assets.simpleviewinc.com/simpleview/image/upload/crm/howardcounty/404881_331507026896190_1007593146_n0-2308ec575056b3a_2308f048-5056-b3a8-494cec7fcaaedcc2.jpg' alt='beers offer'></img>
                            <h2>All Beers</h2>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, beatae nobis. Dolorem fuga repellendus voluptatum ducimus eveniet alias maxime nostrum ipsam laborum, possimus optio officiis facere dignissimos cumque suscipit perspiciatis.
                        </p>

                        </div>

                    </Link>


                </article>

                <article className='col-md-4'>

                    <Link to='/beers/random'>

                        <div className='content'>

                            <img src='https://gourmetdemexico.com.mx/wp-content/uploads/2016/06/beer.jpg' alt='beers offer'></img>
                            <h2>Random Beer</h2>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, beatae nobis. Dolorem fuga repellendus voluptatum ducimus eveniet alias maxime nostrum ipsam laborum, possimus optio officiis facere dignissimos cumque suscipit perspiciatis.
                        </p>

                        </div>

                    </Link>


                </article>

                <article className='col-md-4'>

                    <Link to='/beers/new'>

                        <div className='content'>

                            <img src='https://media.bizj.us/view/img/10372997/thinkstockphotos-477430756*1024xx2121-1193-0-111.jpg' alt='beers offer'></img>
                            <h2>New Beer</h2>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, beatae nobis. Dolorem fuga repellendus voluptatum ducimus eveniet alias maxime nostrum ipsam laborum, possimus optio officiis facere dignissimos cumque suscipit perspiciatis.
                        </p>

                        </div>

                    </Link>


                </article>

            </div>

        </main>
    )
}