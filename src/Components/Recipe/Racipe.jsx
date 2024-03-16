
import time from './../../assets/image/time.png'
import cook from './../../assets/image/cook.png'
import PropTypes from 'prop-types';

Racipe.propTypes = {
    cart:PropTypes.object
}

export default function Racipe({cart}) {
    const { recipe_image,recipe_name,short_description,ingredients,preparing_time,calories } = cart
    console.log(cart);
  return (
    <>
        <div className="p-4 border border-[#28282833] rounded-xl">
                <img className='rounded-xl h-56 w-full bg-center bg-cover bg-red-800' src={recipe_image} alt="" />
                {/* name and description ---------------------start*/}
                <div className='space-y-1  border-b border-[#2828281A] py-4'>
                <h1 className='text-lg font-semibold text-[#282828] '>{recipe_name}</h1>
                <p className='text-sm font-normal text-[#878787] '>
                {short_description}
                </p>
                </div>
                {/* name and description ---------------------end*/}

                {/*  Ingredients start -------------------------------*/}
                <div className='py-4 border-b border-[#2828281A] '>
                    <h1 className='text-base font-medium text-[#282828] '>Ingredients: <span>{ingredients.length}</span></h1>
                    <ul className='list-disc pl-6 text-[#878787] text-sm font-normal '>
                       {
                        ingredients.map((item,index)=> <li key={index}>{item}</li>)
                       }
                    </ul>
                </div>
                {/*  Ingredients end -------------------------------*/}
                {/* time and button start --------------------------*/} 
                <div className='py-4 space-y-4'>
                    <div className='flex gap-6'>
                        <p className='flex item-center gap-1 text-[#282828CC] text-sm font-normal '> 
                            <img src={time} alt="" />
                            <span>{preparing_time}</span>
                            minute
                        </p>
                        <p className='flex item-center gap-1 text-[#282828CC] text-sm font-normal '> 
                            <img src={cook} alt="" />
                            <span>{calories}</span>
                            calories
                        </p>
                    </div>
                    <button className='btn duration-300 bg-[#02B76C] hover:bg-transparent hover:text-[#068F56] text-white  font-bold'>
                        Want to Cook
                    </button>
                </div>
                {/* time and button end --------------------------*/} 
        </div>
       
    </>
  )
}
