import { Link } from "react-router-dom";

export default function HomeCard({ url, image, title }) {
  return (
    <div className="Homecard">
        <Link to={url} className="link">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis aspernatur ipsa at rerum veniam aliquid obcaecati temporibus perspiciatis nam.</p>
        </Link>
    </div>
  )
}
