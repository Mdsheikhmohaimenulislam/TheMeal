// import { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
const Meal = ({ mealDisplay , handleAddWishList}) => {




  return (
    <div>
      <div>
        <div className="card bg-base-100 space-x-10 shadow-sm">
          <figure>
            <img
              src={mealDisplay?.strCategoryThumb}
              alt="mealItems"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{mealDisplay?.strCategory}</h2>
            <div className="card-actions justify-end  items-center">
            <p>
            <BsExclamationCircle  className="size-5 text-yellow-500" />
            </p>
              <button onClick={()=>handleAddWishList(mealDisplay)} className="btn btn-primary text-black hover:bg-yellow-800 hover:text-white border-none">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
