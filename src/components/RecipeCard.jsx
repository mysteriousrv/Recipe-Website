
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const RecipeCard = (props) => {
  // Allow both: props.recipe (for dynamic) and direct props (for static/popular)
  const {
    id,
    image,
    title,
    description = "",
    chef = "",
    favorite = false,
    category = "",
  } = props.recipe || props;

  const { data, setdata } = useContext(RecipeContext);

  // Toggle favorite only if id exists (dynamic recipes)
  const toggleFavorite = (id) => {
    if (!id) return;
    const updated = data.map((r) =>
      r.id === id ? { ...r, favorite: !r.favorite } : r
    );
    setdata(updated);
  };

  return (
    <div className="relative hover:scale-103 duration-150 mr-3 mb-3 block w-[23vw] rounded overflow-hidden shadow bg-white">
      {/* Heart icon only for dynamic recipes */}
      {id && (
        <button
          className="absolute top-2 right-2 text-xl z-10"
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(id);
          }}
          style={{ background: "none", border: "none", cursor: "pointer" }}
          title={favorite ? "Remove from Favorites" : "Add to Favorites"}
        >
          {favorite ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
        </button>
      )}
      {/* Card Content */}
      <Link to={id ? `/recipes/detail/${id}` : "#"}>
        <div className="relative overflow-hidden">
          <img
            className="object-cover w-full h-[20vh] group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
            src={image}
            alt={title}
          />
          {/* Hover icon for popular recipes */}
          {!id && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 10l4.553-4.553a1 1 0 00-1.414-1.414L13.586 8.586A2 2 0 1015 10z"
                />
              </svg>
            </div>
          )}
        </div>
        {/* Category tag */}
        {category && (
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mb-1 ml-1 mt-2">
            {category}
          </span>
        )}
        <h1 className="mt-1 font-black px-2 text-rose-900">{title}</h1>
        {chef && <small className="px-1 text-red-400">{chef}</small>}
        {description && (
          <p className="px-2 pb-2 text-blue-600">
            {description.slice(0, 100)}...{"  "}
            <small className="text-blue-400"></small>
          </p>
        )}
      </Link>
    </div>
  );
};

export default RecipeCard;












///////////////------------------
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { RecipeContext } from "../context/RecipeContext";
// import { FaHeart, FaRegHeart } from "react-icons/fa";

// const RecipeCard = (props) => {
//   const { id, image, title, description, chef, favorite } = props.recipe;
//   const { data, setdata } = useContext(RecipeContext);

//   // Toggle favorite status
//   const toggleFavorite = (id) => {
//     const updated = data.map((r) =>
//       r.id === id ? { ...r, favorite: !r.favorite } : r
//     );
//     setdata(updated);
//   };

//   return (
//     <div className="relative hover:scale-103 duration-150 mr-3 mb-3 block w-[23vw] rounded overflow-hidden shadow bg-gray-800">
//       <button
//         className="absolute top-2 right-2 text-xl z-10"
//         onClick={(e) => {
//           e.preventDefault();
//           toggleFavorite(id);
//         }}
//         style={{ background: "none", border: "none", cursor: "pointer" }}
//         title={favorite ? "Remove from Favorites" : "Add to Favorites"}
//       >
//         {favorite ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
//       </button>
//       <Link to={`/recipes/detail/${id}`}>
//         <img className="object-cover w-full h-[20vh]" src={image} alt="" />
//         <h1 className="mt-2 font-black px-2">{title}</h1>
//         <small className="px-2 text-red-400">{chef}</small>
//         <p className="px-2 pb-2">
//           {description.slice(0, 100)}...{"  "}
//           <small className="text-blue-400">more</small>
//         </p>
//       </Link>
//     </div>
//   );
// };

// export default RecipeCard;