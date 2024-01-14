import { useGlobalcontext } from '../context';
import Loading from './Loading';
import Cocktail from './Cocktail';

const CocktailList = () => {
  const { loading, cocktails } = useGlobalcontext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <div className='title'>
        <h2>no cocktail matches</h2>
      </div>
    );
  }
  return (
    <section>
      <div className='title'>
        <h1>cocktails</h1>
      </div>
      <div className='cocktails'>
        {cocktails.map((item: any) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
