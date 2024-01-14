import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import SingleCocktail from './page/SingleCocktail';
import Error from './page/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cocktail/:id' element={<SingleCocktail />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
