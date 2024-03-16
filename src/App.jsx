
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Nav from './Components/Nav/Nav'
import CookContainer from './Components/Recipe/Cook/CookContainer'
import FetchRecipe from './Components/Recipe/FetchRecipe'

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import RacipeTitle from './Components/Recipe/RacipeTitle'

function App() {
  const [card,setCard] = useState([]);
  const [cookCount,setCookCount] = useState(0)
 
  const handleWantToCook = (cart) =>{
  const isExist = card.find(item => item.recipe_id == cart.recipe_id)
    if(!isExist){
      setCard([...card,cart])
      setCookCount(cookCount+1)
    }else(
      toast.warn('Already exist !')
    )
  }

  return (
    <>
      {/* nav bar start here------------------- */}
      <header className='container px-4 lg:px-10'>
        <Nav/>
      </header>
      {/* nav bar end  here------------------- */}
      {/* main section start here ----------------*/}
      <main className='container mt-5 mb-10  px-4 lg:px-10'>
          <div className=' '>
          <Banner/>
          </div>

          {/* cooking section */}
          <section className='my-20 '>
             <RacipeTitle/>
             {/* Recipe and cook div container */}
             <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                 <FetchRecipe handleWantToCook={handleWantToCook}/>
                 <CookContainer card={card} cookCount={cookCount} />
             </div>
          </section>
      </main>
      {/* main section end here ----------------*/}
      <ToastContainer/>
    </>
  )
}

export default App
