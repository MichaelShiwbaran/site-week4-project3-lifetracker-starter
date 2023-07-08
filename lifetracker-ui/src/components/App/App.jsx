import React from 'react';
import './App.css'
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "../Home/Home";
import SleepPage from "../SleepPage/SleepPage";
import NutritionPage from "../NutritionPage/NutritionPage"
import ExercisePage from "../ExercisePage/ExercisePage"
import ActivityPage from '../ActivityPage/ActivityPage';
import LogIn from  '../LogIn/LogIn'
import LogInUser from '../Api/LogInUser/LogInUser';
import SignUp from '../SignUp/SignUp'
import SignoutUser from '../Api/SignoutUser';
import SignUpUser from '../Api/SignUpUser/SignUpUser'
import Navbar from '../Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserNutritions from '../Api/UserNutritions/UserNutritions';
import UserExcercises from '../Api/UserExcercises/UserExcercises';
import UserSleep from '../Api/UserSleep/UserSleep';
import SleepPageCreate from '../SleepPageCreate/SleepPageCreate';
import NutritionPageCreate from '../NutritionPageCreate/NutritionPageCreate';
import ExercisePageCreate from '../ExercisePageCreate/ExercisePageCreate';
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";


function App() {
  const [UserID, setUserID] = useState()
  const [NutritionLogs, setNutritionLogs] = useState([])
  const {PostUserNutritionLogs, GetUserNutritionLogs}  = UserNutritions({ UserID})
  const {ExerciseLogs, setExcerciseLogs, PostUserExcercises,  GetUserExcercises}  = UserExcercises({ UserID })
  const {SleepLogs, setSleepLogs, GetSleepingData, PostSleepingData} = UserSleep({ UserID })
  const [Login, setLogin] = useState(false)
  const handleSignOutUser = () => { 
    SignoutUser( {setSleepLogs, setExcerciseLogs, setNutritionLogs, setLogin, setUserID })
  }
  console.log(UserID)
  console.log(Login)
  useEffect(() => {
    const checkLoggedIn = () => {
      const token = Cookies.get("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 > Date.now()) {
          setUserID(decodedToken.userID)
          setLogin(true);
        } else {
          handleSignOutUser();
        }
      }
    };

    checkLoggedIn();
  }, []);
  
  // i have handle login here
  // at the end of its job you should setLogin(true)
  //if you have handle logout
  // setLogin(false) and clear the local storage

  if (Login) {
    // useEffect(() => {GetSleepingData() }, [])
    // useEffect( () => { GetUserNutritionLogs( setNutritionLogs ) }, [])
    // console.log("Hi I am in")
    // useEffect(() => {GetUserExcercises() }, [])
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar setSleepLogs = {setSleepLogs} setExcerciseLogs = { setExcerciseLogs } Login = {Login} handleSignOutUser = {handleSignOutUser} />
        <Routes>
          <Route path="/" element={<Home  Login = {Login} />} />
          <Route path="/activity" element=  {<ActivityPage  Login = {Login} ExerciseLogs = {ExerciseLogs} NutritionLogs = {NutritionLogs} SleepLogs=  {SleepLogs} setExcerciseLogs = {setExcerciseLogs} GetUserExcercises = { GetUserExcercises } GetUserNutritionLogs = { GetUserNutritionLogs } setNutritionLogs = {setNutritionLogs} setSleepLogs = { setSleepLogs} GetSleepingData = { GetSleepingData }/>} />
          <Route path="/nutrition" element={<NutritionPage PostUserNutritionLogs = { PostUserNutritionLogs } NutritionLogs = {NutritionLogs} GetUserNutritionLogs = { GetUserNutritionLogs } setNutritionLogs = {setNutritionLogs} Login = {Login} />} />
          <Route path='/exercise' element ={<ExercisePage ExerciseLogs = {ExerciseLogs} setExcerciseLogs = {setExcerciseLogs} PostUserExcercises = { PostUserExcercises } GetUserExcercises = { GetUserExcercises } Login = {Login} UserID = { UserID } />} />
          <Route path='/sleep' element = {<SleepPage SleepLogs=  {SleepLogs} setSleepLogs = { setSleepLogs} PostSleepingData =  { PostSleepingData } GetSleepingData = { GetSleepingData }  Login = {Login}  UserID  = { UserID }/>} />
          <Route path = '/login' element= {<LogIn Login={Login} setLogin = { setLogin } UserID = { UserID } setUserID = { setUserID } />}  />
          <Route path = '/signUp' element = {< SignUp   Login={Login} setLogin = { setLogin } UserID = { UserID } setUserID = { setUserID }/>} />
          <Route path = '/sleep/create' element = {< SleepPageCreate PostSleepingData = {PostSleepingData} />} />
          <Route path = '/nutrition/create' element = {< NutritionPageCreate PostUserNutritionLogs = { PostUserNutritionLogs }  />} />
          <Route path = '/exercise/create' element = {< ExercisePageCreate PostUserExcercises = {PostUserExcercises } />} /> 
        </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App;
