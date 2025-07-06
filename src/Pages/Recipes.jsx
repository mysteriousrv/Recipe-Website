import { useContext, useEffect } from "react"
import { RecipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import { toast } from "react-toastify";
import { div } from "framer-motion/client";

const Recipes = () => {
  const {data} = useContext(RecipeContext);

 useEffect(() => {
    // Check localStorage directly
    const localData = JSON.parse(localStorage.getItem("recipes") || "[]");
    if (data.length === 0 && localData.length === 0) {
      toast.warning("No Recipes Found");
    }
  }, [data]);


  const renderrecipes = data.map((recipe) =>  (
  
 <RecipeCard  key={recipe.id} recipe={recipe}/>

  ));

  return (
   <div> 
    
    
   
     <div className="flex flex-wrap">
      {data.length > 0 ? renderrecipes : null}
    </div>
   </div>
  );
  
}

export default Recipes;