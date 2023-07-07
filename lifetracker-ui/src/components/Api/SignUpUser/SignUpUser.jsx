import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

const SignUpUser = (SignUpInfo) => {
    
    const firstname = SignUpInfo.firstname
    const lastname = SignUpInfo.lastname
    const username = SignUpInfo.username
    const email = SignUpInfo.email
    const password = SignUpInfo.password
    const PostSignUpInfo = async (SignUpInfo) => {
        console.log('PostSignUpInfo was called', SignUpInfo)
        try {
            const response = await axios.post("https://lifetracker-hub-website.onrender.com/auth/register", { 'firstname': firstname, 'lastname': lastname ,'email':email, 'username': username, 'password': password})
            console.log(response.data)
            if(response.status === 200) {
              const token = response.data.token
              Cookies.set("token", token)
            }
        } catch (error) {
            console.error(error)
        }
    }
 

  return {
    PostSignUpInfo
  }
}

export default SignUpUser
