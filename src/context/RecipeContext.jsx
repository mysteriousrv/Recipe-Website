import { useState, createContext, useEffect } from "react";

export const RecipeContext = createContext(null);

const RecipeProvider = (props) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("recipes")) || []);
  },[]);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(data));
  }, [data]);

  return (
    <RecipeContext.Provider value={{ data, setdata }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;




//  {
//       id: 1,
//       title: "Classic Margherita Pizza",
//       ingredients: [
//         "Pizza dough",
//         "Tomato sauce",
//         "Fresh mozzarella cheese",
//         "Fresh basil leaves",
//         "Olive oil",
//         "Salt and pepper to taste",
//       ],
//       instructions: [
//         "Preheat the oven to 475°F (245°C),Roll out the pizza dough and spread tomato sauce evenly.Top with slices of fresh mozzarella and fresh basil leaves.",
//         "Drizzle with olive oil and season with salt and pepper.",
//         "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
//         "Slice and serve hot.",
//       ],

//       image: "https://cdn.dummyjson.com/recipe-images/1.webp",
//       chef: "ritvij verma",
//       category: "dinner",
//       description:
//         "A classic Italian pizza recipe with fresh mozzarella and basil leaves. Served with a side of salad. Preheat the oven to 475°F (245°C).  Slice and serve hot ",
//     },