import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { latest } from '../catogries';
import MealCard from './MealCard';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { mealsnames } from './mealsnames';
import NotFound from './NotFound';
import PopularMeals from './PopularMeals';


function Home() {
  const [meal,setMeal]=useState(latest);
  const [mealnames,setMealnames]=useState(mealsnames);
  const [searchmeal,setsearchmeal]=useState("");
  // const [showresult,setShowresult]=useState(false);
 


  function inputchanged(e){
    // console.log(e.target.value);
    setsearchmeal(e.target.value);
  }
  
  function search(){
   
    
    console.log(searchmeal);
    setShowresult(true);
    // sf.value="";
  }

 
    
  return (
    <div>

      <div>
        <h1 className='text-center md:text-[2rem] text-[#EB455F] mb-16'>Welcome to Restaurant</h1>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col gap-4 md:flex-row mb-8 '>
          
                <Autocomplete sx={{ width: 300 }}
                  freeSolo
                  id="free-solo-2-demo"  
                  

                  
                  options={mealnames.map((option) => option.strMeal)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Search Meals with Name"
                      InputProps={{
                        ...params.InputProps,
                        type: 'text',
                      }}

                      onSelect={inputchanged}
                    />
                  )}
                />
                <Button sx={{ width: 100 }} variant="contained" onClick={search} >
                  Search
                </Button>
            
          </div>
        </div>
      </div>
      
      <hr className='border border-[#2B3467] mb-8'  />
     
      <div>

      
            <h2 className='text-center md:text-[1.5rem] mb-8 tracking-widest text-[#EB455F]'>Popular Meals</h2>
            <div className='flex flex-wrap  gap-4 justify-center items-center '>
                {meal.map((m,i)=>(
                    <MealCard key={i} imglink={m.strMealThumb
                    } mealname={m.strMeal}/>
                ))}
            </div>
            </div>
        

    </div>
    
  )
}

export default Home