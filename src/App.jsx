
import './App.css'
import Banner from './Components/Banner/Banner'
import Nav from './Components/Nav/Nav'
import CookContainer from './Components/Recipe/Cook/CookContainer'
import FetchRecipe from './Components/Recipe/FetchRecipe'

import RacipeTitle from './Components/Recipe/RacipeTitle'

function App() {
 

  return (
    <>
      {/* nav bar start here------------------- */}
      <header className='container px-4 lg:px-16'>
        <Nav/>
      </header>
      {/* nav bar end  here------------------- */}
      {/* main section start here ----------------*/}
      <main className='container px-4 lg:px-16 mt-5 mb-10 '>
          <Banner/>

          {/* cooking section */}
          <section className='my-20'>
             <RacipeTitle/>
             {/* Recipe and cook div container */}
             <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                 <FetchRecipe/>
                 <CookContainer/>
             </div>
          </section>
      </main>
      {/* main section end here ----------------*/}
    </>
  )
}

export default App
