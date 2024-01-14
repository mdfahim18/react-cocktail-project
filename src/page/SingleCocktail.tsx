import React from 'react';
import Loading from '../components/Loading';
import { Link, useParams } from 'react-router-dom';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();

  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState<any>({});

  React.useEffect(() => {
    setLoading(true);
    const getCockatai = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getCockatai();
  }, [id]);

  const { name, category, glass, image, info, instructions, ingredients } =
    cocktail;

  return (
    <section className='single-cocktail'>
      {loading && <Loading />}
      {!cocktail && <h2>no cocktail to display</h2>}
      <div className='drink'>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p className='drink-data'>
            name: <span>{name}</span>
          </p>
          <p className='drink-data'>
            category: <span>{category}</span>
          </p>
          <p className='drink-data'>
            info: <span>{info}</span>
          </p>
          <p className='drink-data'>
            glass: <span>{glass}</span>
          </p>
          <p className='drink-data'>
            instructions: <span>{instructions}</span>
          </p>
          <p className='drink-data'>
            <span>ingredients: </span>
            {[ingredients].map((item: any, index: any) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
      <Link to='/' className='btn back-to-home-btn'>
        back to home
      </Link>
    </section>
  );
};

export default SingleCocktail;
