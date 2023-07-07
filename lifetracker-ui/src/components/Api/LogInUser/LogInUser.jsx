import React from 'react'
import axios from 'axios';
import LogIn from '../../LogIn/LogIn';
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

const LogInUser = ({setLogin , LoginInfo , setLoginInfo, setUserID }) => {
    console.log(setLogin)
    console.log(LoginInfo)
    console.log(setLoginInfo)
    const email = LoginInfo.email
    const password = LoginInfo.password
    const PostCallToLogInUser = async () => {
        try {
            const response = await axios.post("https://lifetracker-hub-website.onrender.com/auth/login", {'email':email,  'password': password});
            if (response.status === 200) {
                const token = response.data.token
                Cookies.set("token", token)
            }
            console.log(response.data)
            let userInfo = response.data.user
            console.log(userInfo.id)
            setUserID(userInfo.id)
            setLogin(true)
        } catch (error) {
            console.error(error)
        }
    }
    
  return {
    PostCallToLogInUser
}
}

export default LogInUser
