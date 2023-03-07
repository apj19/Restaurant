import React from 'react'
import MealCard from './MealCard'
import { useState } from 'react';

function PopularMeals({mealList}) {
  const [meal,setMeal]=useState(mealList);

  return (
    <div>
        <h2 className='text-center md:text-[1.5rem] mb-8 tracking-widest text-[#EB455F]'>Popular Meals</h2>
        <div className='flex flex-wrap  gap-4 justify-center items-center '>
            {meal.map((m,i)=>(
                <MealCard key={i} imglink={m.strMealThumb
                } mealname={m.strMeal}/>
            ))}
        </div>
    </div>
    
  )
}

export default PopularMeals