// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header/Header";
import HeaderTop from "./components/HeaderTop/HeaderTop";

//import pages
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Menu from "./components/Menu/Menu";

//import hooks
import { useState } from "react";

const RoutesApp = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <BrowserRouter>
      <Menu menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
      <HeaderTop setMenuIsVisible={setMenuIsVisible} />
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home menuIsVisible={menuIsVisible} />} />
          <Route
            path="/portfolio"
            element={<Portfolio menuIsVisible={menuIsVisible} />}
          />
          <Route
            path="/contato"
            element={<Contact menuIsVisible={menuIsVisible} />}
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RoutesApp;
