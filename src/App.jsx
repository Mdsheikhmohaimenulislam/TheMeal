import "./App.css";
import Meals from "./Components/Meals/Meals";
import Navbar from "./Components/Navbar/Navbar";

function App() {


  return (
    <>
      <div>
        <div>
          <Navbar></Navbar>
          <h1 className="text-center mt-5 mb-10 text-lg font-bold">
            Popular Ingredients
          </h1>
          <hr className="w-[95%] mx-auto mb-10" />
        </div>

        <div>
          <Meals></Meals>
        </div>
      </div>
    </>
  );
}

export default App;
