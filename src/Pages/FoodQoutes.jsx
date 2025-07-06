import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const foodQuotes = [
  { quote: "People who love to eat are always the best people.", author: "Julia Child" },
  { quote: "One cannot think well, love well, sleep well, if one has not dined well.", author: "Virginia Woolf" },
  { quote: "There is no sincerer love than the love of food.", author: "George Bernard Shaw" },
  { quote: "First we eat, then we do everything else.", author: "M.F.K. Fisher" },
  { quote: "Life is uncertain. Eat dessert first.", author: "Ernestine Ulmer" },
  { quote: "You don’t need a silver fork to eat good food.", author: "Paul Prudhomme" },
  { quote: "Food is symbolic of love when words are inadequate.", author: "Alan D. Wolfelt" },
  { quote: "Cooking is like love. It should be entered into with abandon or not at all.", author: "Harriet Van Horne" },
  { quote: "Good food is the foundation of genuine happiness.", author: "Auguste Escoffier" },
  { quote: "We all eat, and it would be a sad waste of opportunity to eat badly.", author: "Anna Thomas" },
  { quote: "The only thing I like better than talking about food is eating.", author: "John Walters" },
  { quote: "Laughter is brightest where food is best.", author: "Irish Proverb" },
  { quote: "Food brings people together on many different levels.", author: "Giada De Laurentiis" },
  { quote: "If you really want to make a friend, go to someone’s house and eat with him.", author: "Cesar Chavez" },
  { quote: "After a good dinner one can forgive anybody, even one’s own relatives.", author: "Oscar Wilde" },
  { quote: "There is no love sincerer than the love of food.", author: "George Bernard Shaw" },
  { quote: "All happiness depends on a leisurely breakfast.", author: "John Gunther" },
  { quote: "Food is our common ground, a universal experience.", author: "James Beard" },
  { quote: "The secret of success in life is to eat what you like and let the food fight it out inside.", author: "Mark Twain" },
  { quote: "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.", author: "Adelle Davis" },
  { quote: "Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.", author: "Ruth Reichl" },
  { quote: "There is nothing better than a friend, unless it is a friend with chocolate.", author: "Linda Grayson" },
  { quote: "Let food be thy medicine and medicine be thy food.", author: "Hippocrates" },
  { quote: "The belly rules the mind.", author: "Spanish Proverb" },
  { quote: "A recipe has no soul. You as the cook must bring soul to the recipe.", author: "Thomas Keller" },
  { quote: "Cooking is at once child’s play and adult joy. And cooking done with care is an act of love.", author: "Craig Claiborne" },
  { quote: "To eat is a necessity, but to eat intelligently is an art.", author: "François de La Rochefoucauld" }
];

const FoodQuoteCard = () => {
  const [quoteObj, setQuoteObj] = useState(foodQuotes[0]);
  const [loading, setLoading] = useState(false);

  const showRandomQuote = () => {
    setLoading(true);
    setTimeout(() => {
      const idx = Math.floor(Math.random() * foodQuotes.length);
      setQuoteObj(foodQuotes[idx]);
      setLoading(false);
    }, 400); // just for effect
  };

  useEffect(() => {
    showRandomQuote(); // Initial load
    const interval = setInterval(showRandomQuote, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-yellow-50 p-6 rounded-2xl shadow-md min-h-[200px] flex flex-col items-center justify-center text-center">
      {loading ? (
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-500"></div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={quoteObj.quote}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <p className="text-lg italic text-gray-800 mb-2">"{quoteObj.quote}"</p>
            <p className="text-sm text-gray-600">– {quoteObj.author}</p>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default FoodQuoteCard;