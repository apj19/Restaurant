import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';

function MealDetail() {
    const {id,mealname}= useParams();
    useEffect(() => {
    async function fetchdata(){
        // setShowLoder(true);

        const mealdata= await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${mealname}`);
        // console.log(mealdata.data);

      }
      fetchdata();
})
  return (
    <div>
        <p>{id}</p>
        <p>{mealname}</p>
    </div>
  )
}

export default MealDetail