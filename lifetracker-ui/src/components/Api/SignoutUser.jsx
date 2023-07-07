import React from 'react'
import Cookies from 'js-cookie'


const SignoutUser = ({setSleepLogs, setExcerciseLogs, setNutritionLogs, setUserID, setLogin }) => {
  Cookies.remove("token")
  setExcerciseLogs([])
  setSleepLogs([])
  setNutritionLogs([])
  setUserID(null)
  setLogin(false) 
  return {
 
}
}

export default SignoutUser
