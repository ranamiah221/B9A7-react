import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import Cart from './components/Cart/Cart'

function App() {
const [carts, setCarts]=useState([]);
useEffect(()=>{
  fetch('recipe.json')
  .then(res=> res.json())
  .then(data=> setCarts(data))
},[])

  return (
    <>
       <Header></Header>
       <Banner></Banner>
       <Recipes></Recipes>
       {/* carts container */}
       <div className='flex justify-between'>
            {/* recipe carts */}
            <div className='w-3/5 grid grid-cols-2 gap-5'>
               {
                carts.map(cart=> <Cart key={cart.id} cart={cart}></Cart>)
               }
            </div> 
            {/* history section */}
            <div className='bg-yellow-400 w-2/5'>2</div>

       </div>
    </>
  )
}

export default App
