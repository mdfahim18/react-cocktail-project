import React from 'react';
import { useGlobalcontext } from '../context';

const Search = () => {
  const { searchTerm, setSearchTerm } = useGlobalcontext();
  const searchValue = React.useRef<any>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  return (
    <section className='search section'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>search your favorite cocktails</h1>
        <input
          ref={searchValue}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
      </form>
    </section>
  );
};

export default Search;
