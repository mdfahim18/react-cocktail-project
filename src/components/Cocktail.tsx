import { Link } from 'react-router-dom';

const Cocktail = ({ id, name, image, info, glass }: any) => {
  return (
    <article className='cocktail'>
      <div>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-info'>
        <h1>{name}</h1>
        <h3>{glass}</h3>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-detalis'>
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
