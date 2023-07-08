import React from 'react'
import "./ExercisePage.css"
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import ExercisePageCard from '../ExercisePageCard/ExercisePageCard'

const ExercisePage = ( {ExerciseLogs, setExcerciseLogs, Login, GetUserExcercises } ) => {
  console.log('Login condition', Login)
  if (Login){
    useEffect( () => { GetUserExcercises( setExcerciseLogs) }, [])
    }
  console.log('ExcerciseLogs is:', ExerciseLogs)
  return (
  <div>
  <div className='header-wrap-ex'>
      <h1 className='header'>Exercise</h1>
  </div>
    { Login? 
  <div className='body-ex'>
  <Link  to={"/exercise/create"} className='link'><button className='add-ex'>Add more...</button> </Link>
  <br />

  {ExerciseLogs.map((ExerciseLogs, id) => (<ExercisePageCard key={id} ExerciseLogs={ExerciseLogs}/>))}

  </div>:
  <h1>Please Login First</h1>
}
  </div>


)
}

export default ExercisePage