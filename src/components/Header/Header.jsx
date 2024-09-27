import { FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <div className="grid grid-cols-3 items-center gap-5 justify-around mt-8">
      <div>
        <h1 className="text-4xl font-bold text-[#150B2B]">Recipe Calories</h1>
      </div>
      <div>
        <ul className="flex gap-4 text-xl font-normal text-[#150B2BB3] justify-center">
          <li>Home</li>
          <li>Recipes</li>
          <li>About</li>
          <li>Search</li>
        </ul>
      </div>
      <div className="flex items-center justify-end">
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="bg-[#150b2b0c] rounded-lg px-2 p-1" placeholder="Search" />
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
        
            </svg>
          </label>
        </div>
        <div className="text-xl text-white w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <FaUser></FaUser>
        </div>
      </div>
    </div>
  );
};

export default Header;
