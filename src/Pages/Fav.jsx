import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import Footer from "./Footer";
// import { div } from "framer-motion/client";


const Fav = () => {
  const { data } = useContext(RecipeContext);

  // Filter only favorite recipes
  const favRecipes = data.filter((r) => r.favorite);

  return (
    
  <div>
    <div className="flex ">
    <div><h1 className="text-2xl font-bold text-center mt-6 ">Here is Your Favourite Recipie's...</h1>
      <img className="h-[60vh] mt-8"  src="./src/assets/img/chef-0.jpg" alt="" />
    </div>
    
      <div className="flex flex-wrap  mt-8 px-10">
      {favRecipes.length > 0 ? (
        favRecipes.map((recipe) => (
 <div className="w-[600px]">
        <RecipeCard key={recipe.id} recipe={recipe} />
      </div>        ))
      ) : (
        <div className="text-center w-full mt-10 text-red-500 text-3xl">No favorite recipes yet.......</div>
      )}
    </div>
     
    </div>
    <Footer/>
  </div>
    
  );
};

export default Fav;
