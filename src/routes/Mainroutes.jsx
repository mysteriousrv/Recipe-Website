import { Routes, Route } from "react-router-dom";
import Recipes from "../Pages/Recipes";
import About from "../Pages/About";
import Home from "../Pages/Homes";
import Create from "../Pages/Create";
import Singlerecipe from "../Pages/Singlerecipe";
import Fav from "../Pages/Fav";
import PageNotFound from "../Pages/PageNotFound";

const Mainroutes = () => {
  return (
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/Recipes" element={<Recipes />} />
      <Route path="/Recipes/Detail/:id" element={<Singlerecipe />} />
      <Route path="/About" element={<About />} />
      <Route path="/Create-Recipes" element={<Create />} />
      <Route path="/favorites" element={<Fav />} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
};

export default Mainroutes;
