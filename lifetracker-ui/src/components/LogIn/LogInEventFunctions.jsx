import react from 'react'
import { useNavigate } from 'react-router-dom';

const LogInEventFunctions = ({setLoginInfo }) => {
    let history = useNavigate()
    const updateUserEmail = (event)=>{
        console.log(event.target.value)
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'email': event.target.value}
        setLoginInfo(LoginInfo => ({
            ...LoginInfo,
            ...UpdatedUserinput
        }))

        }

        const updateUserPassword = (event)=>{
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'password': event.target.value}
        setLoginInfo(LoginInfo => ({
            ...LoginInfo,
            ...UpdatedUserinput
        }))

        }

        const LogInFormSubmission = (event, PostCallToLogInUser , LoginInfo ) => {
            console.log('LogInFormSubmission was called')
            event.preventDefault();
            PostCallToLogInUser(LoginInfo ) 
            history("/activity")
            
          }

  return {
    updateUserEmail,
    updateUserPassword,
    LogInFormSubmission
}
}

export default LogInEventFunctions
