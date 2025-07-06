import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Singlerecipe = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(RecipeContext);
  const params = useParams();
  const recipe = data.find((recipe) => String(params.id) === String(recipe.id));

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      chef: "",
      image: "",
      instruction: "",
      description: "",
      ingredient: "",
      category: "",
    },
  });

  useEffect(() => {
    if (recipe) {
      reset({
        title: recipe.title,
        chef: recipe.chef,
        image: recipe.image,
        instruction: recipe.instruction,
        description: recipe.description,
        ingredient: recipe.ingredient,
        category: recipe.category,
      });
    }
  }, [recipe, reset]);

  const UpdateHandler = (updatedRecipe) => {
    const recipeindex = data.findIndex((r) => String(params.id) === String(r.id));
    const copydata = [...data];
    copydata[recipeindex] = { ...copydata[recipeindex], ...updatedRecipe };
    setdata(copydata);
    toast.success("Recipe Updated");
  };

  const DeleteHandler = () => {
    const filterdata = data.filter((r) => String(r.id) !== String(params.id));
    setdata(filterdata);
    toast.warning("Recipe Deleted");
    navigate("/recipes");
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex gap-8 p-6 overflow-x-auto">
      {/* Left: Recipe Details Card */}

    
   
      <div className="left w-3/5 min-w-0">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-300 break-words">
          <h1 className="text-4xl font-black mb-4 text-blue-900 break-words">{recipe.title}</h1>
          <img className="h-[200px] w-full object-cover rounded mb-4" src={recipe.image} alt={recipe.title} />
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded font-semibold break-words">
              Chef: {recipe.chef}
            </span>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-semibold break-words">
              {recipe.category}
            </span>
          </div>
          <div className="mb-2">
            <span className="font-semibold text-gray-700">Description:</span>
            <div className="text-gray-800 break-words">{recipe.description}</div>
          </div>
          <div className="mb-2">
            <span className="font-semibold text-gray-700">Ingredients:</span>
            <ul className="list-disc list-inside text-gray-800 break-words">
              {recipe.ingredient?.split(",").map((ing, idx) => (
                <li key={idx}>{ing.trim()}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Instructions:</span>
            <ol className="list-decimal list-inside text-gray-800 break-words">
              {recipe.instruction?.split(",").map((step, idx) => (
                <li key={idx}>{step.trim()}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Right: Edit Form */}
      <div className="right w-2/5 min-w-0">
        <form
          className="w-full p-6 border border-gray-400 rounded-2xl shadow-lg bg-white"
          onSubmit={handleSubmit(UpdateHandler)}
        >
          <input
            className="block border border-gray-300 outline-0 p-2 mb-3 rounded w-full overflow-x-auto"
            {...register("image")}
            type="url"
            placeholder="Enter Image URL"
            maxLength={500}
          />

          <input
            className="block border border-gray-300 outline-0 p-2 mb-3 rounded w-full overflow-x-auto"
            {...register("title")}
            type="text"
            placeholder="Recipe Title"
            maxLength={100}
          />

          <input
            className="block border border-gray-300 outline-0 p-2 mb-3 rounded w-full overflow-x-auto"
            {...register("chef")}
            type="text"
            placeholder="Chef Name"
            maxLength={50}
          />

          <textarea
            className="block border border-gray-300 outline-0 p-2 mb-3 rounded resize-none w-full overflow-x-auto"
            {...register("description")}
            placeholder="Write recipe description here"
            maxLength={1000}
          ></textarea>

          <textarea
            className="block border border-gray-300 outline-0 p-2 mb-3 rounded resize-none w-full overflow-x-auto"
            {...register("ingredient")}
            placeholder="Write ingredients here separated by commas"
            maxLength={1000}
          ></textarea>

          <textarea
            className="block border border-gray-300 outline-0 p-2 mb-3 rounded resize-none w-full overflow-x-auto"
            {...register("instruction")}
            placeholder="Write instructions here separated by commas"
            maxLength={2000}
          ></textarea>

          <select
            className="block border border-gray-300 outline-0 p-2 mb-3 rounded w-full"
            {...register("category")}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
          </select>
          {/* Buttons row */}
          <div className="flex gap-4 mt-5 justify-center">
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 rounded"
            >
              Update
            </button>
            <button
              type="button"
              onClick={DeleteHandler}
              className="bg-red-900 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Singlerecipe;