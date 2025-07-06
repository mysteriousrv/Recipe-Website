import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import Footer from "./Footer";

const images = [
  "./src/assets/img/desert1cover.webp",
   "./src/assets/img/cover01.jpg",
    "./src/assets/img/img4.jpg",
    "./src/assets/img/cover02.jpg",
  // "./src/assets/img/cake2cover.avif",
  "./src/assets/img/samosa3cover.avif",
  // "./src/assets/img/paneercover4.jpeg",
  "./src/assets/img/cover04.jpg",
  "./src/assets/img/cover6.webp",
  
];

const popularRecipes = [
  {
    image: "./src/assets/img/popular/img1.jpg",
    title: "White Pasta",
    category: "Super",
  },
  {
    image: "./src/assets/img/popular/img3.jpg",
    title: "Special Samosa",
    category: "Snack",
  },
  {
    image: "../src/assets/img/popular/img4.jpg",
    title: "Kadai Paneer and Butter Naan Roti ",
    category: "Smoothie",
  },
];

const Homes = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Slider */}
      <div className="w-full h-[500px] relative overflow-hidden">
        <h1 className="text-3xl font-bold absolute z-10 left-8 top-3 text-white drop-shadow-lg">Zaika Junction – Recipes that connect ❤️...</h1>
        <img
          src={images[current]}
          alt="Food Banner"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      </div>

      {/* Popular Recipes Section */}
      <div className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full">
        <h2 className="text-3xl font-bold text-center mb-8  ">Popular Recipes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {popularRecipes.map((item, idx) => (
            <RecipeCard
              key={idx}
              image={item.image}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homes;