import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

  return (
    <div>
      <div onClick={()=>{navigate("/beers");}}  className="card text-start " >
        <img src={beers} className="card-img-top" alt="bar picture" />
        <div className="card-body">
            <h2>All Beers</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste eius, veniam vitae iure, molestiae omnis possimus, impedit illum incidunt reiciendis distinctio? Atque minus rem officia sit ut delectus repellendus.
            Amet minima cupiditate ipsam? Placeat eveniet saepe non autem ex perspiciatis repellendus facilis. Mollitia esse similique voluptatibus dolores enim corporis officia ducimus, ad fuga pariatur aperiam labore a ea sapiente.
            Doloribus eum laudantium, labore adipisci, error odio laborum perferendis dolores necessitatibus quibusdam repudiandae optio consectetur harum praesentium illum tenetur architecto aliquam in dolore, modi ullam neque vitae velit rerum! Est.
          </p>
        </div>
      </div>
      <div onClick={()=>{navigate("/random-beer");}} className="card text-start" >
        <img src={randomBeer} className="card-img-top" alt="beer tap" />
        <div className="card-body">
        <h2>Random Beer</h2>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quam provident id nisi, ratione hic earum? Ex commodi sequi repellendus illum porro rerum rem corrupti esse? Ad, architecto dignissimos? Dicta.
            Sed ducimus voluptate, harum hic tempora quia repellat, obcaecati perferendis autem culpa expedita soluta, debitis facere dicta accusantium quo enim itaque fugiat aut doloremque maxime vel architecto! Dolorem, optio delectus.
            Quisquam consectetur at eveniet eius laborum facere nam nemo molestiae vero. Modi reprehenderit sit velit culpa sapiente blanditiis vitae maxime fugiat repellendus facere, voluptate sequi ea soluta. Rerum, ipsa necessitatibus.
          </p>
        </div>
      </div>
      <div onClick={()=>{navigate("/new-beer");}} className="card text-start" >
        <img src={newBeer} className="card-img-top" alt="beer glass" />
        <div className="card-body">
        <h2>New Beer</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque hic commodi suscipit, minus consectetur neque tempore, libero ad dicta rem iure numquam. Voluptatibus accusamus, sequi quasi sed minima voluptas unde?
            Excepturi soluta ipsa earum id porro delectus reprehenderit dolorem reiciendis consectetur, ex facere iure quod nobis exercitationem eveniet harum nulla, vero odit similique asperiores beatae quisquam voluptatum. Aperiam, repudiandae hic.
            Quas, enim voluptas vero beatae officia voluptate tempore consectetur alias, soluta maxime ad delectus sapiente dolor sed magnam. Animi expedita suscipit a veniam blanditiis laborum sit soluta omnis at iusto.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
