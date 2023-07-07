import React from 'react'
import { useState } from 'react'
import SleepPageFunctions from "./SleepPageFunctions"
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import "./SleepPage.css"
import SleepPageCard from '../SleepPageCard/SleepPageCard'


const SleepPage = ({ SleepLogs, setSleepLogs, Login, GetSleepingData }) => {
  // const = sleepPageFunctions
  console.log(Login)
  const { sleepPageFunctions }  =  SleepPageFunctions()
  
  if (Login){
    useEffect( () => { GetSleepingData( setSleepLogs) }, [])
    }
  console.log('SleepLogs is:', SleepLogs)

  return (
    <div>
    <div className='header-wrap-sleep'>
      <h1 className='header'>Sleep</h1>
    </div>

    <div className='body-sleep'>
    <Link  to={"/sleep/create"} className='link'><button className='add-sleep-btn'>Add more...</button> </Link>
    <br />


    {SleepLogs.length > 0 && SleepLogs.map((SleepLogs, id) => (<SleepPageCard key={id} SleepLogs={SleepLogs}/>))}

    {/* <SleepPageCard/> */}

    </div>
    </div>
  )
}

export default SleepPage