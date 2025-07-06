import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { RecipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import FoodQuotes from "./FoodQoutes";
import { div } from "framer-motion/client";
// import { div } from "framer-motion/client"
import Footer from "./Footer";

const Create = () => {
  const navigate = useNavigate();

  const { data, setdata } = useContext(RecipeContext);

  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();

    const copydata = [...data];
    copydata.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(copydata));

    setdata([...data, recipe]);
    toast.success("Recipe Added Successfully");
    navigate("/recipes");

    reset();
  };

  return (
    <div>
      <div className="flex justify-center gap-10 items-center ">
        <div id="right " className="px-10">
          <h1 className=" mb-10 text-3xl font-bold   mt-10 ">
            Let's Cook Something Delicious!, Share Your Tasty Creation!...
          </h1>
          <p className=" mb-10   ">
            Create a Recipe 🍲 Got a dish that always makes your family smile?{" "}
            <br />
            Or a kitchen experiment that turned into magic? <br />
            Share your recipe with the world and inspire fellow food lovers!{" "}
            <br />
            Add your ingredients, steps, and a pinch of love 💕 <br />
            Because every great meal starts with someone daring to try.
          </p>
          <FoodQuotes />
        </div>
        <div
          className="border border-gray-300 p-6 rounded-2xl shadow mx-10 mt-10 mb-4"
          id="leftform  "
        >
          <form onSubmit={handleSubmit(SubmitHandler)}>
            <input
              className="block border-b outline-0   border border-gray-300 p-6  mb-2 rounded-2xl shadow"
              {...register("image")}
              type="url"
              placeholder="Enter Image URL"
            />
            {/* <small className="text-red-400">Error</small> */}

            <input
              className="block border-b outline-0  p-2 border border-gray-300 mb-2 rounded-2xl shadow"
              {...register("title")}
              type="text"
              placeholder="Recipe Title"
            />

            <input
              className="block border-b outline-0  p-2 border border-gray-300  mb-2 rounded-2xl shadow"
              {...register("chef")}
              type="text"
              placeholder="Chef Name"
            />

            <textarea
              className="block border-b outline-0  p-2 border border-gray-300 mb-2 rounded-2xl shadow resize-none "
              {...register("description")}
              placeholder="// write recipe description here"
            ></textarea>

            <textarea
              className="block border-b outline-0  p-2 border border-gray-300 mb-2  rounded-2xl shadow resize-none "
              {...register("ingredient")}
              placeholder="// write ingedients here separated by commas"
            ></textarea>

            <textarea
              className="block border-b outline-0  p-2 border border-gray-300 mb-2 rounded-2xl shadow resize-none "
              {...register("instruction")}
              placeholder="// write instruction here separated by commas"
            ></textarea>
            <select
              className="block border-b outline-0  p-2 border border-gray-300 mb-2 rounded-2xl shadow"
              {...register("category")}
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="supper">Supper</option>
              <option value="dinner">Dinner</option>
            </select>
            <button className="block mt-5  bg-green-300 px-4 py-2  border border-gray-300 p-6 rounded-2xl shadow">
              Save Recipe
            </button>
          </form>
        </div>
      </div>
         <Footer />
    </div>
  );
};

export default Create;
