import beersImg from "../assets/beers.png"
import newBeersImg from "../assets/new-beer.png"
import randomeBersImg from "../assets/random-beer.png"

function Home(){
    return(
        <div className="Home">
            <h1>My Home Page</h1>
            <img src={beersImg} alt="allBeer"/>
            <h2>All Beers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor obcaecati minima ratione voluptatem assumenda nam, corrupti excepturi illum id fugit enim optio accusamus mollitia commodi veniam asperiores eligendi pariatur eaque expedita quidem dignissimos dicta. Architecto maiores obcaecati repellendus nostrum quaerat pariatur laudantium ut earum, totam perspiciatis eveniet ipsa numquam? Numquam fugiat nesciunt magnam omnis! Debitis natus voluptatibus error aliquid earum, repudiandae iusto non possimus culpa vitae modi ex itaque vero suscipit tempore, exercitationem qui rem provident fugiat perferendis eaque excepturi. Ducimus iure, ea et similique minima suscipit recusandae rem ad dolores cum voluptates eius accusamus, magni inventore consequatur voluptas aspernatur?
            </p>           
            <img src={newBeersImg} alt="allBeer"/>
            <h2>Random Beers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor obcaecati minima ratione voluptatem assumenda nam, corrupti excepturi illum id fugit enim optio accusamus mollitia commodi veniam asperiores eligendi pariatur eaque expedita quidem dignissimos dicta. Architecto maiores obcaecati repellendus nostrum quaerat pariatur laudantium ut earum, totam perspiciatis eveniet ipsa numquam? Numquam fugiat nesciunt magnam omnis! Debitis natus voluptatibus error aliquid earum, repudiandae iusto non possimus culpa vitae modi ex itaque vero suscipit tempore, exercitationem qui rem provident fugiat perferendis eaque excepturi. Ducimus iure, ea et similique minima suscipit recusandae rem ad dolores cum voluptates eius accusamus, magni inventore consequatur voluptas aspernatur?
            </p>        
            <img src={randomeBersImg} alt="allBeer"/>
            <h2>New Beers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor obcaecati minima ratione voluptatem assumenda nam, corrupti excepturi illum id fugit enim optio accusamus mollitia commodi veniam asperiores eligendi pariatur eaque expedita quidem dignissimos dicta. Architecto maiores obcaecati repellendus nostrum quaerat pariatur laudantium ut earum, totam perspiciatis eveniet ipsa numquam? Numquam fugiat nesciunt magnam omnis! Debitis natus voluptatibus error aliquid earum, repudiandae iusto non possimus culpa vitae modi ex itaque vero suscipit tempore, exercitationem qui rem provident fugiat perferendis eaque excepturi. Ducimus iure, ea et similique minima suscipit recusandae rem ad dolores cum voluptates eius accusamus, magni inventore consequatur voluptas aspernatur?
            </p>
            <img src="" alt="allBeer"/> 
        </div>
    )

}
export default Home;