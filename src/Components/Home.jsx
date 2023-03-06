import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { latest } from '../catogries';
import MealCard from './MealCard';


function Home() {
  const [meal,setMeal]=useState(latest);
  // console.log(latest);
    
  return (
    <div>

      <h1>Home</h1>
      


    <div className='flex flex-wrap  gap-4 justify-center items-center '>
         {meal.map((m,i)=>(
            <MealCard key={i} imglink={m.strMealThumb
            } mealname={m.strMeal}/>
         ))}
    </div>

    </div>
    
  )
}

export default Home