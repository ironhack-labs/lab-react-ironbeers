import { Link } from "react-router-dom";

function HomeSection({ img, title, url }) {
  return (
    <section className="home-section">
      <Link to={url}>
        <img src={img} alt="fotoSection"></img>
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
          porttitor dui. Nunc id nisi diam. Aenean quis risus eget sapien
          bibendum sagittis in id urna. Cras condimentum erat at magna tempor,
          non convallis mi vehicula. Fusce lectus felis, iaculis sed sem sit
          amet, mollis pharetra purus. In hac habitasse platea dictumst. In hac
          habitasse platea dictumst.
        </p>
      </Link>
    </section>
  );
}

export default HomeSection;
