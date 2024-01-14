import React, { useCallback, useContext, useEffect, useState } from 'react';
const Appcontext = React.createContext<any>({});

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppProvider = ({ children }: any) => {
  const [cocktails, setCocktaills] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchCocktails = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url} ${searchTerm}`);
      const data = await response.json();

      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map(
          ({
            idDrink,
            strDrink,
            strAlcoholic,
            strGlass,
            strDrinkThumb,
          }: any) => {
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          }
        );

        setCocktaills(newCocktails);
      } else {
        setCocktaills([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchCocktails();
  }, [searchTerm, fetchCocktails]);
  return (
    <Appcontext.Provider
      value={{ cocktails, loading, searchTerm, setSearchTerm }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalcontext = () => {
  return useContext(Appcontext);
};
export { Appcontext, AppProvider };
