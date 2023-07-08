import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUpEventFunctions = ( {setSignUpInfo } ) => {

    let history = useNavigate()
    const updateUserFirstName = (event)=>{
        console.log(event.target.value)
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'firstname': event.target.value}
        setSignUpInfo(signUpInfo => ({
          ...signUpInfo,
          ...UpdatedUserinput
        }))
    
      }
    
      const updateUserLastName = (event )=>{
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'lastname': event.target.value}
        setSignUpInfo(signUpInfo => ({
          ...signUpInfo,
          ...UpdatedUserinput
        }))
    
      }
    
    
      const updateUserEmail = (event)=>{
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'email': event.target.value}
        setSignUpInfo(signUpInfo => ({
          ...signUpInfo,
          ...UpdatedUserinput
        }))
    
      }
    
    
      const updateUsername = (event )=>{
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'username': event.target.value}
        setSignUpInfo(signUpInfo => ({
          ...signUpInfo,
          ...UpdatedUserinput
        }))
    
      }
    
      const updateUserPassword = (event )=>{
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'password': event.target.value}
        setSignUpInfo(signUpInfo => ({
          ...signUpInfo,
          ...UpdatedUserinput
        }))
    
      }

      const updateUserComfirmPassword = (event) => {
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'confirmPassword': event.target.value}
        setSignUpInfo(signUpInfo => ({
            ...signUpInfo,
            ...UpdatedUserinput
        }))
      }
 
      const signUpFormSubmission = (event, PostSignUpInfo, signUpInfo ) => {
        event.preventDefault();
        PostSignUpInfo(signUpInfo) 
        history('/activity')
        
        
      }
  return {
    updateUserFirstName,
    updateUserLastName,
    updateUserEmail,
    updateUsername,
    updateUserPassword,
    updateUserComfirmPassword,
    signUpFormSubmission
}
}

export default SignUpEventFunctions
