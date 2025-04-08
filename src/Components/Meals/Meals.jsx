import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";

const Meals = () => {
  const [mealDisplays, setMealDisplays] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setMealDisplays(data.categories));
  }, []);
  return (
    <div className="grid grid-cols-2 space-y-5 text-lg m-1 text-center">
      {mealDisplays.map((mealDisplay) => (
        <Meal key={mealDisplay.idCategory} mealDisplay={mealDisplay} ></Meal>
      ))}
    </div>
  );
};

export default Meals;
