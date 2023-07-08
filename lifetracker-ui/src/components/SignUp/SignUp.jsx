import React from 'react'
import { useState } from 'react'
import "./SignUp.css"
import {Link} from 'react-router-dom'
import SignUpUser from '../Api/SignUpUser/SignUpUser'
import SignUpEventFunctions from './SignUpEventFunctions'
const SignUp = (props) => {
  const [signUpInfo, setSignUpInfo]  = useState({'firstname': null , 'lastname': null , 'username': null, 'email': null, 'password':null })
  const {PostSignUpInfo} = SignUpUser(signUpInfo, props.setLogin, props.setUserID)
  
  // const updateUserName = (event )=>{
  //   event.preventDefault()
  //   let UpdatedUserinput = {}
  //   UpdatedUserinput = {'firstName': event.target.value}
  //   setSignUpInfo(signUpInfo => ({
  //     ...signUpInfo,
  //     ...UpdatedUserinput
  //   }))

  // }


  const {updateUserFirstName, updateUserLastName,  updateUserEmail, updateUsername, updateUserPassword,updateUserComfirmPassword, signUpFormSubmission } = SignUpEventFunctions({setSignUpInfo, signUpInfo})
  console.log(signUpInfo)
  return (
    <div className='container'>

    <div className='content-left'>
        {/* <img src="https://media.istockphoto.com/id/1140193165/photo/slim-and-fit-woman-drinking-water-before-having-breakfast.jpg?s=612x612&w=0&k=20&c=_QgpYIvS6mFI18tGVJGGD5mKbJ9KHk5JBqAfHDIopKg=" alt="" /> */}
    </div>

    <div className='content-right'>

    <div className='form-div'>
      <img src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur.png" alt="" />
      <h1>Create Account</h1>
      <h4>And get started on your journey</h4>
      <form className='signup-form' onSubmit= {(event) => signUpFormSubmission(event, PostSignUpInfo , signUpInfo) }>
      
      <span className='inline'>
      {/* <label> First Name: </label>  */}
      <input type="text" placeholder="First Name"onChange={ (event) => updateUserFirstName(event) }  />

      {/* <label> Last Name: </label> */}
      <input type="text" placeholder="Last Name" onChange = { (event) => updateUserLastName(event) } />
      
      </span>
      
      <br/>
      
      {/* <label> Email: </label> <br/> */}
      <input type="email" placeholder="Email" onChange = { (event) => updateUserEmail(event) }/>
    
      <br />
      
      {/* <label> Username: </label> <br/> */}
      <input type="text" placeholder="Username" onChange={ updateUsername }/>

      <br/>

      {/* <label> Password: </label> <br/> */}
      <input type="password" placeholder="Password" onChange = { updateUserPassword } />

      <br/>

      {/* <label> Confirm Password: </label> <br/> */}
      <input type="password"  placeholder="Confirm Password" onChange={ updateUserComfirmPassword} />

      <br/>

      <button type="submit">Create Account</button>
      </form>
      <p className='prompt'>Already have an account?    
      <Link to={"/login"}> Log In</Link>
      </p>
    </div>
    </div>
  </div>
  )
}

export default SignUp
