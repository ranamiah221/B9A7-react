import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import Cart from "./components/Cart/Cart";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [carts, setCarts] = useState([]);
  const [saveCart, setSaveCart] = useState([]);
  const [prepares, setPrepares]=useState([]);
   useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  const handleAddToCart = (cart) => {
    const isExist = saveCart.find((item) => item.recipe_id === cart.recipe_id);
    if (isExist) {
      toast.error("Already Add to the Cart");
    } else {
      setSaveCart([...saveCart, cart]);
    }
  };
  const handleCurrentAddToCart=(id,prepare)=>{
    const newPrepare=([...prepares,prepare])
    setPrepares(newPrepare);
    const remainingSaveCart=saveCart.filter(item=> item.recipe_id !== id)
    setSaveCart(remainingSaveCart);

  }

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
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
          <div className="m-6 text-[#878787] w-4/5 mx-auto">
            <table className="table">
              <thead className="">
                <tr className="">
                  <th></th>
                  <th className="w-32 text-xl font-medium">Name</th>
                  <th className="w-32 text-xl font-medium">Time</th>
                  <th className="w-32 text-xl font-medium">Calories</th>
                  <th></th>
                </tr>
              </thead>
              {saveCart.map((save, idx) => (
                <tbody key={idx}>
                  <tr className="text-xl font-normal">
                    <td>{idx + 1}</td>
                    <td>{save?.recipe_name}</td>
                    <td>{save?.preparing_time}</td>
                    <td>{save.calories}</td>
                    <td>
                      <button onClick={()=>handleCurrentAddToCart(save.recipe_id, save)} className="bg-green-500 text-base font-medium text-[#150B2B] px-4 py-2 rounded-2xl">
                        Preparing
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>


          {/* Currently cooking section */}
          <div className="w-3/5 mx-auto mt-20">
            <h2 className="text-xl font-semibold border-b-2 pb-4">
              Currently Want to cook : {prepares.length}
            </h2>
          </div>

          {/* currently table element */}
          <div className="m-6 text-[#878787] w-4/5 mx-auto">
            <table className="table">
              <thead className="">
                <tr className="">
                  <th></th>
                  <th className="w-32 text-xl font-medium">Name</th>
                  <th className="w-32 text-xl font-medium">Time</th>
                  <th className="w-32 text-xl font-medium">Calories</th>
                 
                </tr>
              </thead>
              {prepares.map((prepare, idx) => (
                <tbody key={idx}>
                  <tr className="text-xl font-normal">
                    <td>{idx + 1}</td>
                    <td>{prepare?.recipe_name}</td>
                    <td>{prepare?.preparing_time}</td>
                    <td>{prepare?.calories}</td>
                
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
