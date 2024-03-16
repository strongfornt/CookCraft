import { useEffect, useState } from "react";
import Racipe from "./Racipe";
import PropTypes from 'prop-types';

FetchRecipe.propTypes = {
    handleWantToCook:PropTypes.func
}

export default function FetchRecipe({handleWantToCook}) {
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setCart(data))
    },[])
  return (
    <div className='mt-16 grid grid-cols-1  lg:grid-cols-2  gap-4 col-span-2'>
        {
            cart.map((cart,index)=> <Racipe 
             cart={cart} 
             key={index} 
             handleWantToCook={handleWantToCook}
             />)
        }
    </div>
  )
}
