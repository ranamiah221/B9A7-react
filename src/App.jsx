import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import Cart from "./components/Cart/Cart";

function App() {
  const [carts, setCarts] = useState([]);
  const [saveCart, setSaveCart] = useState([]);
  
  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  const handleAddToCart = (cart) => {
    setSaveCart([...saveCart, cart]);
    console.log(cart);
  };

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
      {/* carts container */}
      <div className="flex justify-between">
        {/* recipe carts */}
        <div className="w-3/5 grid grid-cols-2 gap-5 mr-5">
          {carts.map((cart) => (
            <Cart
              key={cart.id}
              cart={cart}
              handleAddToCart={handleAddToCart}
            ></Cart>
          ))}
        </div>
        {/* history section */}
        <div className="bg-[#FFF] w-2/5 text-center border-[#28282833] border-2 p-8 rounded-lg">
          <div className="w-3/5 mx-auto">
            <h2 className="text-xl font-semibold border-b-2 pb-4">
              Want to cook:{saveCart.length}
            </h2>
          </div>

          <div className="m-6 text-[#878787] w-2/4 mx-auto">
            <table className="table">
              <thead className="">
                <tr className="">
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th></th>
                </tr>
              </thead>
              {
              saveCart.map((save,idx) => (
                
                <tbody key={idx}>
                  <tr>
                    <td>{idx + 1}</td>
                    <td>{save?.recipe_name}</td>
                    <td>{save?.preparing_time}</td>
                    <td>{save.calories}</td>
                    <td><button className="bg-green-600 text-base font-medium text-[#FFF] p-2 rounded-2xl">preparing</button></td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
