import React from 'react'
import { useState } from 'react';
import axios from "axios"
const UserExcercises = ({UserID}) => {
    const [ExerciseLogs, setExcerciseLogs] = useState([])
    const GetUserExcercises = async () => {
        try {
            const response = await axios.get(`https://lifetracker-hub-website.onrender.com/exercise/useexercisedata/${UserID}`);
            console.log(response.data)
            setExcerciseLogs(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    
    const PostUserExcercises = async (ExcerciseLog) => {
        try {
            console.log('ExcerciseLog' ,ExcerciseLog, 'UserID' , UserID)
            const response = await axios.post("https://lifetracker-hub-website.onrender.com/exercise/addexercise", { 'name' :ExcerciseLog.name, 'duration': ExcerciseLog.duration, 'intensity': ExcerciseLog.intensity, 'category': ExcerciseLog.category, 'UserID': UserID });
            console.log(response.data)
            // SetLogInUserInfo(true)
        } catch (error) {
            console.error(error)
        }
    }
   
  return {
    GetUserExcercises,
    PostUserExcercises,
    setExcerciseLogs,
    ExerciseLogs

}
}

export default UserExcercises
