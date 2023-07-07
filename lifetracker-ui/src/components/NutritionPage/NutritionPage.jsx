import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect} from 'react'
import { useState } from 'react'
import "./NutritionPage.css"
import NutritionPageCard from '../NutritionPageCard/NutritionPageCard'


const NutritionPage = ({ GetUserNutritionLogs , setNutritionLogs, NutritionLogs , Login} ) => {
  if (Login){
  useEffect( () => { GetUserNutritionLogs( setNutritionLogs ) }, [])
  }
  console.log(NutritionLogs)
  return (
    <div>
    <div className='header-wrap-nutri'>
      <h1 className='header'>Nutrition</h1>
    </div>
    <div className='body-nutri'>
      <Link  to={"/nutrition/create"} className='link'><button className='add-nutri'>Add more...</button> </Link>
      <br />
      
      {NutritionLogs.map((NutritionLogs, id) => (<NutritionPageCard key={id} NutritionLogs={NutritionLogs}/>))}

    
    </div>
    
    </div>
  )
}

export default NutritionPage