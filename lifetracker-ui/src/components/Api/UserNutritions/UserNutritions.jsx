import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const UserNutritions = ({UserID}) => {
    console.log(UserID)
    
    const GetUserNutritionLogs = async (setNutritionLogs ) => {
        try {
            console.log('UserID', UserID)
            const response = await axios.get(`https://lifetracker-hub-website.onrender.com/nutrition/usernutritiondata/${UserID}`);
            // console.log(response.data.rows)
            console.log(response.status)
            setNutritionLogs(response.data)
            
        } catch (error) {
            console.error(error)
        }
    }
    const PostUserNutritionLogs = async (NutritionLog) => {
      console.log(NutritionLog, UserID)
      try {
        const response = await axios.post("https://lifetracker-hub-website.onrender.com/nutrition/addnutritiondata", { 'name' :NutritionLog.name, 'calories': NutritionLog.calories, 'category': NutritionLog.category, 'quantity': NutritionLog.quantity, 'url': NutritionLog.url , 'UserID': UserID });
        console.log(response.data)
        // SetLogInUserInfo(true)
    } catch (error) {
        console.error(error)
    }
    }
    

  return {
  PostUserNutritionLogs,
  GetUserNutritionLogs
}
}

export default UserNutritions
