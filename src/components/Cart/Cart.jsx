
const Cart = ({cart}) => {
    const {recipe_image, recipe_name, short_description, ingredients,preparing_time,calories}=cart;
    return (
        <div className="card bg-base-100 w-full shadow-xl p-7 rounded-lg">
        <figure>
          <img className="h-80 w-full rounded-lg"
            src={recipe_image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-medium mt-4 mb-2">{recipe_name}</h2>
          <p className="text-[#878787] text-base font-normal border-b-2 pb-5">{short_description}</p>
         
        </div>
      </div>
    );
};

export default Cart;