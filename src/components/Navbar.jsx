import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    // <div className="w-full bg-red-300 flex items-center justify-center text-sm mb-4">
    <div className="w-full ">
      <div className="flex items-center justify-center gap-x-20 text-sm w-full max-w-7xl mx-auto py-4">
        <NavLink className={(e) => (e.isActive ? "text-red-500 font-bold" : "")} to="/">
          Home
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-500 font-bold" : "")}
          to="/Recipes"
        >
          Recipes
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-500 font-bold" : "")}
          to="/About"
        >
          About
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-500 font-bold" : "")}
          to="/Create-Recipes"
        >
          Create Recipe
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-500 font-bold" : "")}
          to="/favorites"
        >
          Favorites
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;