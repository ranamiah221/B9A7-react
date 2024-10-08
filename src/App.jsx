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
  const [totalTime, setTotalTime]=useState(0);
  const [totalCalories, setTotalCalories]=useState(0)

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
    // add to current cart
    const newPrepare=([...prepares,prepare])
    setPrepares(newPrepare);
    // remove to saving cart
    const remainingSaveCart=saveCart.filter(item=> item.recipe_id !== id)
    setSaveCart(remainingSaveCart);
    // sum total time...
    const newTime=parseInt(prepare.preparing_time.split(' ')[0]);
    setTotalTime(totalTime + newTime);
    console.log(prepare);
    // sum total calories ...
    const newCalories=parseInt(prepare.calories.split(' ')[0]);
    setTotalCalories(totalCalories + newCalories);


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
      <div className="md:flex justify-between">
        {/* recipe carts */}
        <div className="md:w-3/5 grid md:grid-cols-2 gap-5 md:mr-5">
          {carts.map((cart) => (
            <Cart
              key={cart.id}
              cart={cart}
              handleAddToCart={handleAddToCart}
            ></Cart>
          ))}
        </div>
        {/* history section */}
        <div className="bg-[#FFF] md:w-2/5 text-center border-[#28282833] border-2 p-8 rounded-lg">
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-xl font-semibold border-b-2 pb-4">
              Want to cook:{saveCart.length}
            </h2>
          </div>
          <div className="md:m-6 text-[#878787] md:w-4/5 mx-auto">
            <table className="table">
              <thead className="">
                <tr className="">
                  <th></th>
                  <th className="md:w-32 text-xl font-medium">Name</th>
                  <th className="md:w-32 text-xl font-medium">Time</th>
                  <th className="md:w-32 text-xl font-medium">Calories</th>
                  <th></th>
                </tr>
              </thead>
              {saveCart.map((save, idx) => (
                <tbody className="m-1" key={idx}>
                  <tr className="text-xl font-normal">
                     <td>{idx + 1}</td>
                    <td>{save?.recipe_name}</td>
                    <td>{save?.preparing_time}</td>
                    <td>{save.calories}</td>
                    <td>
                      <button onClick={()=>handleCurrentAddToCart(save.recipe_id, save)} className="bg-green-500 text-base font-medium text-[#150B2B] md:px-4 md:py-2 p-1 rounded-2xl">
                        Preparing
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>


          {/* Currently cooking section */}
          <div className="md:w-3/5 mx-auto md:mt-20 mt-10">
            <h2 className="text-xl font-semibold border-b-2 pb-4">
              Currently Want to cook : {prepares.length}
            </h2>
          </div>

          {/* currently table element */}
          <div className="md:m-6 text-[#878787] md:w-4/5 mx-auto">
            <table className="table">
              <thead className="">
                <tr className="">
                  <th></th>
                  <th className="md:w-32 text-xl font-medium">Name</th>
                  <th className="md:w-32 text-xl font-medium">Time</th>
                  <th className="md:w-32 text-xl font-medium">Calories</th>
                 
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
                  <tbody>
                  <tr className="text-xl font-normal">
                    <td></td>
                    <td></td>
                    <td className="md:text-xl text-sm text-black md:font-medium md:pt-10 pt-3 mb-10">Total Time= {totalTime} <span className="text-base font-medium">min</span> </td>
                    <td className="md:text-xl text-sm text-black md:font-medium md:pt-10 pt-3 mb-10">Total Calories= {totalCalories} <span className="text-base font-medium">calories</span></td>
                
                  </tr>
                </tbody>
            </table>
          </div>
          

        </div>
        

      </div>
    </>
  );
}

export default App;
