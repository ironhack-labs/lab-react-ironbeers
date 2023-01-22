import { useNavigate } from 'react-router-dom';

export default function BeerListItem({ data }) {
    const navigate = useNavigate();
    let { image_url, name, tagline, contributed_by, _id } = data;
    return (
        <div className="card" onClick={() => navigate(`/beer/${_id}`)} >
            <img src={image_url} alt={name} width='100px'/>
            <div>
                <div>{name}</div>
                <div>{tagline}</div>
                <div>Created by: {contributed_by}</div>
            </div>

        </div>
    )
    
}