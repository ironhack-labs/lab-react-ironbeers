import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
        <Link to={"/beers"}>
            <img src="../src/assets/beers.png" alt="Bar top image" />
            <h2>All Beers</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat libero in officiis labore doloremque at quam, vitae rem, perferendis debitis aut eligendi modi eius porro cupiditate molestiae delectus culpa aliquam?</p>
        </Link>

        <Link to={"/random-beer"}>
        <img src="../src/assets/random-beer.png" alt="Bar top image" />
        <h2>Random Beer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium obcaecati maiores debitis odit rerum quisquam dolor reiciendis reprehenderit nihil. Magni aliquid fugiat sint mollitia libero possimus ab vitae, impedit veniam.</p>
        </Link>

        <Link to={"/new-beer"}>
        <img src="../src/assets/new-beer.png" alt="Bar top image" />
        <h2>New Beer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe veritatis, hic velit aut fugiat delectus in omnis minus asperiores nesciunt odit. Veritatis quidem tempore ea, aliquid sed quos sint!</p>
        </Link>
        </>
    )
}

export default HomePage;
