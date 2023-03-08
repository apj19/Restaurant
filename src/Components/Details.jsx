import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MealCard from './MealCard';
import { mealsnames } from './mealsnames';


function Details() {
    const {id}=useParams();
    //  console.log(id);
    const [meal,setMeal]= useState([]);
    const mealUrl=`www.themealdb.com/api/json/v1/1/filter.php?c=${id}`;
    const [showLoader,setShowLoder]= useState(false);
        
    // console.log(meals.length);
    
      useEffect(() => {
        async function fetchdata(){
          setShowLoder(true);
  
          const mealdata= await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`);
          // console.log(mealdata.data);
          setMeal(mealdata.data.meals);
          setShowLoder(false);
          // console.log(mealdata.data.meals[0]);
  
        }
        fetchdata();
      
        
      }, [mealUrl])
   
   
    
    

  return (
    <div >
      <h2 className='text-center text-[1.5rem] md:text-[2rem] mb-8 tracking-widest text-[#EB455F]'>{id}</h2>
    {showLoader &&  <div className='w-full h-full absolute left-0 top-0 backdrop-blur-md z-10 flex justify-center items-center'>
      <p className='animate-bounce'>Loading.......</p>


    </div>  }
    <div className='flex flex-wrap  gap-4 justify-center items-center '>
         {meal.map((m,i)=>(
            <MealCard key={i} imglink={m.strMealThumb
            } mealname={m.strMeal} mealtype={id}/>
         ))}
    </div>
    
    </div>
  )
}

export default Details