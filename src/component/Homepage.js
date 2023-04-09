
import { Link } from 'react-router-dom';

function HomePage() {

    return (
        <div>

            <Link to="/beers" >
                <h2>All Beers</h2>
                <p>Beer is one of the oldest and most widely consumed[4] type of alcoholic drink in the world, and the third most popular drink overall after potable water and tea.[5] It is produced by the brewing and fermentation of starches, mainly derived from cereal grains—most commonly from malted barley, though wheat, maize (corn), rice, and oats are also used. During the brewing process, fermentation of the starch sugars in the wort produces ethanol and carbonation in the resulting beer.</p>
            </Link >

            <Link to={"/random-beer"}>
                <img src="./assets/new-beer.png" alt="" />
                <h2>Random Beer</h2>
                <p>Beer is one of the oldest and most widely consumed[4] type of alcoholic drink in the world, and the third most popular drink overall after potable water and tea.It is produced by the brewing and fermentation of starches, mainly derived from cereal grains—most commonly from malted barley, though wheat, maize (corn), rice, and oats are also used. During the brewing process, fermentation of the starch sugars in the wort produces ethanol and carbonation in the resulting beer.</p>
            </Link >

            <Link to={"/new-beer"}>
                <img src="./assets/new-beer.png" alt="" />
                <h2>New Beer</h2>
                <p>Beer is one of the oldest[1][2][3] and most widely consumed[4] type of alcoholic drink in the world, and the third most popular drink overall after potable water and tea.[5] It is produced by the brewing and fermentation of starches, mainly derived from cereal grains—most commonly from malted barley, though wheat, maize (corn), rice, and oats are also used. During the brewing process, fermentation of the starch sugars in the wort produces ethanol and carbonation in the resulting beer.</p>
            </Link>

        </div>
    )

}

export default HomePage;