import React from 'react';
import { Link, BrowserRouter } from "react-router-dom"

const Home = () => {
    return (
        <div className="container">
            <BrowserRouter>


            <section>
                <img src="./images/beers.png" alt=""/>
                <Link to="/beers" >All Beers</Link>
                <p>
                    Minions ipsum la bodaaa underweaaar belloo! Tulaliloo ti aamoo! Chasy baboiii.
                    Ti aamoo! tulaliloo wiiiii bee do bee do bee do tank yuuu! Para tú hahaha chasy.
                    Me want bananaaa! underweaaar butt belloo! Belloo! Underweaaar aaaaaah gelatooo butt bappleees.
                    Baboiii daa para tú gelatooo bee do bee do bee do.
                    Hahaha bee do bee do bee do ti aamoo! Uuuhhh bappleees underweaaar poulet tikka masala bananaaaa.
                    Potatoooo hahaha chasy jiji poopayee uuuhhh tatata bala tu me want bananaaa! Chasy.
                </p>
            </section>
            <section>
                    <img src="./images/random-beer.png" alt=""/>
                <Link to="/random-beer" >Random Beer</Link>
                <p>
                    Minions ipsum la bodaaa underweaaar belloo! Tulaliloo ti aamoo! Chasy baboiii.
                    Ti aamoo! tulaliloo wiiiii bee do bee do bee do tank yuuu! Para tú hahaha chasy.
                    Me want bananaaa! underweaaar butt belloo! Belloo! Underweaaar aaaaaah gelatooo butt bappleees.
                    Baboiii daa para tú gelatooo bee do bee do bee do.
                    Hahaha bee do bee do bee do ti aamoo! Uuuhhh bappleees underweaaar poulet tikka masala bananaaaa.
                    Potatoooo hahaha chasy jiji poopayee uuuhhh tatata bala tu me want bananaaa! Chasy.
                </p>
            </section>
            <section>
                    <img src="./images/new-beer.png" alt=""/>
                <Link to="/new-beer" >New Beer</Link>
                <p>
                    Minions ipsum la bodaaa underweaaar belloo! Tulaliloo ti aamoo! Chasy baboiii.
                    Ti aamoo! tulaliloo wiiiii bee do bee do bee do tank yuuu! Para tú hahaha chasy.
                    Me want bananaaa! underweaaar butt belloo! Belloo! Underweaaar aaaaaah gelatooo butt bappleees.
                    Baboiii daa para tú gelatooo bee do bee do bee do.
                    Hahaha bee do bee do bee do ti aamoo! Uuuhhh bappleees underweaaar poulet tikka masala bananaaaa.
                    Potatoooo hahaha chasy jiji poopayee uuuhhh tatata bala tu me want bananaaa! Chasy.
                </p>
            </section>
            </BrowserRouter>
        </div>
    )
}
export default Home