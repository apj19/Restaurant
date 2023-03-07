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
import axios from 'axios';
import { Link } from 'react-router-dom';


function Home() {
  const [meal,setMeal]=useState(latest);
  const [mealnames,setMealnames]=useState(mealsnames);
  const [searchmeal,setsearchmeal]=useState("");
  const [showresult,setShowresult]=useState(false);
  const fetchMealUrl='https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const [finalresult,setFinalResult]= useState();
 
  let errornotfound= <div className="text-center">
  <p className="text-base font-semibold text-indigo-600">404</p>
  <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
  <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
  <div className="mt-10 flex items-center justify-center gap-x-6">
    
    
    <button
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={gohome}
    >
      Go back home
    </button>
    
   
   
  </div>
                </div>;
  
  function gohome(){
    setShowresult(false);

  }
  function inputchanged(e){
    // console.log(e.target.value);
    setsearchmeal(e.target.value);
  }
  
  async function search(){ 
    // console.log(searchmeal);
    const fetchData= await axios.get(`${fetchMealUrl}${searchmeal}`);
    // console.log(fetchData);
    setShowresult(true);
    if(fetchData.data.meals ==null){
      // console.log("Not found");
      setFinalResult(errornotfound)
      // finalresult=errornotfound;
    }else{
      // console.log("found");
      // console.log(fetchData.data.meals[0].strCategory);
      // console.log(fetchData.data.meals[0].strMealThumb);
      // console.log(fetchData.data.meals[0].strMeal);

      
      let temp= <MealCard imglink={fetchData.data.meals[0].strMealThumb} 
      mealname={fetchData.data.meals[0].strMeal} 
      mealtype={fetchData.data.meals[0].strCategory}/>
      setFinalResult(temp);
      // finalresult=<h1>Hi Working</h1>
    }
    
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
      <h2 className='text-center md:text-[1.5rem] mb-8 tracking-widest text-[#EB455F]'>Popular Meals</h2>
      
     
      {!showresult && <div>

      

          <div className='flex flex-wrap  gap-4 justify-center items-center '>
              {meal.map((m,i)=>(
                  <MealCard key={i} imglink={m.strMealThumb
                  } mealname={m.strMeal} mealtype={m.idMeal}/>
              ))}
          </div>
          </div>
      }
      {showresult && finalresult

      }
        

    </div>
    
  )
}

export default Home