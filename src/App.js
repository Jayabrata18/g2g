import React from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
// import Roadmap from "./pages/Roadmap";
// import { useEffect } from "react";
import AboutUs from "./pages/AboutUs";
import LandingPage from "./pages/LandingPage";
import { useEffect } from "react";
// import MenuButtonClicked from "./pages/MenuButtonClicked";
// import Footer from "./pages/Footer";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      // case "/menu-button-clicked":
      //   title = "";
      //   metaDescription = "";
      //   break;
      // case "/footer":
      //   title = "";
      //   metaDescription = "";
      //   break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      {/* <Route path="/roadmap" element={<Roadmap />} /> */}
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/menu-button-clicked" element={<MenuButtonClicked />} />
      <Route path="/footer" element={<Footer />} /> */}
    </Routes>
  );
}
export default App;
