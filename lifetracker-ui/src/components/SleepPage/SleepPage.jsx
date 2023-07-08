import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import "./SleepPage.css"
import SleepPageCard from '../SleepPageCard/SleepPageCard'


const SleepPage = ({ SleepLogs, setSleepLogs, Login, GetSleepingData }) => {
  // const = sleepPageFunctions
  console.log(Login)
  
  if (Login){
    useEffect( () => { GetSleepingData( setSleepLogs) }, [])
    }
  console.log('SleepLogs is:', SleepLogs)

  return (
    <div>
    <div className='header-wrap-sleep'>
      <h1 className='header'>Sleep</h1>
    </div>
    {Login?
    <div className='body-sleep'>
    <Link  to={"/sleep/create"} className='link'><button className='add-sleep-btn'>Add more...</button> </Link>
    <br />


    {SleepLogs.length > 0 && SleepLogs.map((SleepLogs, id) => (<SleepPageCard key={id} SleepLogs={SleepLogs}/>))}

    {/* <SleepPageCard/> */}

    </div>:
    <h1 className='loginfirst'>Please Login First</h1>
}
    </div>
  )
}

export default SleepPage