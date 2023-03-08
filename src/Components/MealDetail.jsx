import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';

function MealDetail() {
    const {id,mealname}= useParams();
    const [mealDetails,setMealDetail] = useState({});
    const [ingriedentsList,setIngridentList] =useState([]);
    const [recipIntructions,setrecipInstructions]=useState([]);
    const [measure,setmeasure] = useState([]);
  


    useEffect(() => {
        async function fetchdata(){
            // setShowLoder(true);

            const mealdata= await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${mealname}`);
            // console.log(mealdata.data.meals[0]);
            // console.log(typeof(mealdata.data.meals[0]));
            setMealDetail(mealdata.data.meals[0]);
            let temp=Object.entries(mealdata.data.meals[0])
            // console.log(Object.entries(mealdata.data.meals[0]));
            let tempIngridents=[];
            temp.map((m)=>{
              if(m[0].includes('strIngredient') && m[1] !='')
              tempIngridents.push(m[1]);
            });
            let outputArray = Array.from(new Set(tempIngridents))
            setIngridentList(outputArray);

            tempIngridents=(mealdata.data.meals[0].strInstructions).split('.');
            setrecipInstructions(tempIngridents);

            tempIngridents=[];
            temp.map((m)=>{
              if(m[0].includes('strMeasure') && m[1] !='')
              tempIngridents.push(m[1]);
            });
            //  outputArray = Array.from(new Set(tempIngridents));
            //  console.log(outputArray);
             setmeasure(tempIngridents);

          }
         fetchdata();
        //  console.log(mealDetails);

    },[]);

    

  return (
    <div className='px-8' >
      <div className='grid md:grid-cols-2 md:gap-8'>
        <div className='mb-4 '>
          
          <p className='text-[#EB455F] md:text-[1.5rem] mb-4'>{mealname}</p>
 
          <img className='h-[200px] md:h-auto  max-h-[400px] rounded-lg' src={mealDetails.strMealThumb} alt=""  />
          <div className='flex gap-4 mt-4'>
              <p>YouTube :</p>
            <a href={mealDetails.strYoutube} target="_blank"  > 
            <svg className='w-[1.5rem] h-[1.5rem] fill-red-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
            </a>
          </div>
           
        </div>
        <div>
        <p className='text-[#EB455F] md:text-[1.5rem] mb-2'>Ingridents</p>

          <ul className="w-[60%] text-sm font-medium text-gray-900 ">
          {ingriedentsList.map((m,i)=>(
          <li key={i} className=" px-4 py-2  list-disc
          ">{m} : {measure[i]}</li>
          
          ))}


                
               
          </ul>
          
        </div>

      </div>

      <div>
        
        <h2 className='text-center text-[1.5rem] md:text-[2rem] tracking-widest text-[#EB455F]'>Recipe</h2>
        

       
        
        <ol className=" text-sm font-medium text-gray-900  ">
        {recipIntructions.map((m,i)=>(
        <li key={i} className=" px-4 py-2  list-disc
        ">{m}</li>))}
        </ol>
      </div>
      
    </div>
  )
}

export default MealDetail