import { useState } from 'react'
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details';
import Navbar from './Components/Navbar';
import MealDetail from './Components/MealDetail';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';



function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className='bg-[white] font-["Poppins"]   min-w-[375px] min-h-[100vh] max-w-[1440px]'>
        <Navbar/>
      
        <div className='md:mx-4 fixed z-50 left-0 top-[43px] md:top-[75px] '>
        <Nav/>

        </div>
        <div className='md:pl-44 pt-40 md:pt-20  w-full '>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Favourite' element={<Home />}></Route>

        <Route path='/meal/:id' element={<Details />}></Route>
        <Route path='/meal/:id/:mealname' element={<MealDetail />}></Route>
        <Route path='*' element={<NotFound/> }></Route>



        </Routes>
        </div>
        <Footer/>
       
    </div>
  )
}

export default App
