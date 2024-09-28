import { FaClock, FaVaadin } from "react-icons/fa";
import Ingredient from "../Ingredient/Ingredient";


const Cart = ({cart, handleAddToCart}) => {
    const {recipe_image, recipe_name, short_description, ingredients,preparing_time,calories}=cart;

    return ( 
        <div className="card bg-base-100 md:w-full shadow-xl p-7 rounded-lg border-[#28282833] border-2 flex flex-col">
        <figure>
          <img className="h-80 w-full rounded-lg"
            src={recipe_image}
            alt="Shoes" />
        </figure>
        <div className="card-body flex-grow">
          <h2 className="text-xl font-medium mt-4 mb-2">{recipe_name}</h2>
          <p className="text-[#878787] text-base font-normal border-b-2 pb-5">{short_description}</p>
         <ul className="text-base text-[#878787] font-normal list-disc pl-7 border-b-2 py-5 ">
            {
                 ingredients.map((ingredient,idx)=><Ingredient key={idx} ingredient={ingredient}></Ingredient>)
            }
         </ul>

         {/* time and categories */}
         <div className="flex justify-around ">
            <div className="flex justify-start items-center gap-1 p-6 lg:-ml-20">
                <FaClock></FaClock>
                <p className="text-[#282828CC] font-medium text-base">{preparing_time}</p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <FaVaadin></FaVaadin>
              <p className="text-[#282828CC] font-medium text-base">{calories}</p>
            </div>
         </div>
        </div>
        {/* button */}
        <button onClick={()=>handleAddToCart(cart)} className="btn btn-accent text-xl font-medium bg-[#0BE58A] rounded-3xl md:py-5 md:px-6 mr-3 p-1">Want to cook</button>
      </div>
    );
};

export default Cart;