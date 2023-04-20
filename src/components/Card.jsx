import { Link } from 'react-router-dom';

const Card = ({ title, info, imgUrl, to, state }) => {
  return (
    <Link to={to} state={state}>
      <img src={imgUrl} alt='' />
      <div className='title'>{title}</div>
      <div className='info'>{info}</div>
    </Link>
  );
};

export default Card;
