import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Header from './components/Header/Header';
import HeaderTop from './components/HeaderTop/HeaderTop';

//import pages
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <HeaderTop />
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contato' element={<Contact />} />

          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RoutesApp;
