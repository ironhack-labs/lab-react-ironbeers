import {Link} from "react-router-dom"

const PicWithLorem = ({image, title, link}) => {
    return (
        <div>
            <div className="picWithLorem">
                <img src={image} alt="all-beer" />
                <Link to={link}><h3>{title}</h3></Link>
                <p>sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt</p>
                <hr />
            </div>
        </div>
    )
}

export default PicWithLorem