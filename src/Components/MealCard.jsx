import React from 'react';
import { Link } from 'react-router-dom';


function MealCard({imglink,mealname,mealtype}) {

 


  return (
    // <Card className="max-w-[18rem] overflow-hidden">
    //   <CardHeader
    //     floated={false}
    //     shadow={false}
    //     color="transparent"
    //     className="m-0 rounded-none"
    //   >
    //     <img
    //       src={imglink}
    //     />
    //   </CardHeader>
    //   <CardBody>
    //     <Typography variant="h4" color="blue-gray">
    //       {mealname}
    //     </Typography>
        
    //   </CardBody>
      
    // </Card>
    <>
    <div className="relative  bg-white group cursor-pointer items-center justify-center overflow-hidden transition-shadow shadow-xl shadow-black/30 rounded-[10px] h-[16rem] w-60   dark:bg-[#1e293b] ">


        <div className="h-[75%] w-[100%] border  rounded-[10px]  mb-4  ">
            <img className="h-full w-full object-cover transition-transform duration-700  hover:scale-105 " src={imglink} alt="not avaliable" />

        </div>
        <Link to={`/meal/${mealtype}/${mealname}`} >
        <h3 className="px-4  mt-2 text-center hover:underline"  >{mealname}</h3>
        </Link>
        



     </div>
    </>
  )
}

export default MealCard