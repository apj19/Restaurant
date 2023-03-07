import { useState } from 'react'
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details';
import Navbar from './Components/Navbar';
import MealDetail from './Components/MealDetail';
import NotFound from './Components/NotFound';



function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className='bg-[#e8e8e8] font-["Poppins"]   min-w-[375px] min-h-[100vh] max-w-[1440px]'>
        <Navbar/>
      
        <div className='mx-4 fixed left-0 top-[75px] '>
        <Nav/>

        </div>
        <div className='pl-40 pt-20 w-full border-l border-cyan-500 border-dashed'>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Favourite' element={<Home />}></Route>

        <Route path='/meal/:id' element={<Details />}></Route>
        <Route path='/:id/:mealname' element={<MealDetail />}></Route>
        <Route path='*' element={<NotFound/> }></Route>



        </Routes>
        </div>
       
    </div>
  )
}

export default App
