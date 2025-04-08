import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import Wishlist from "../Wishlist/Wishlist";

const Meals = () => {

  const [mealDisplays, setMealDisplays] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setMealDisplays(data.categories));
  }, []);

  const [whitelist , setWhiteList]=useState([])

  const handleAddWishList = (food) => {
    setWhiteList([...whitelist,food]);
  };

  // that component wishlist
//   const [wishlistItems, setWishlistItems] = useState([]);
//   const handleAddToWishlist = (meal) => {
//     const newItems = [...]
//   };


  return (

    <div className="flex w-[95%] mx-auto gap-10">
        <div className="grid grid-cols-2 text-lg m-1 text-center">
          {mealDisplays.map((mealDisplay) => (
            <Meal key={mealDisplay.idCategory}  handleAddWishList={ handleAddWishList}  mealDisplay={mealDisplay}></Meal>
          ))}
        </div>
        <div className="mx-auto">
          <Wishlist whitelist={whitelist} />
        </div>
    </div>
  );
};

export default Meals;
