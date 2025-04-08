import "./App.css";
import Meal from "./Components/Meal/Meal";
import Meals from "./Components/Meals/Meals";
import Navbar from "./Components/Navbar/Navbar";
import Wishlist from "./Components/Wishlist/Wishlist";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1 className="text-center mt-5 mb-10 text-lg">Popular Ingredients</h1>
        <hr className="w-[95%] mx-auto mb-10" />
      </div>

      <div className="flex">
        <div className="w-[60%] mx-auto">
          <Meals></Meals>
          <Meal></Meal>
        </div>
        <div className="w-[30%] mx-auto">
          <Wishlist></Wishlist>
        </div>
      </div>
    </>
  );
}

export default App;
