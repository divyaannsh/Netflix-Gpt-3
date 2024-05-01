import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidatedata } from '../utils/validate';
const Login = () => {
    const [isSignForm, setIsSignForm] =useState(true);
    const [errorMessage , setErrorMessage] = useState(null);
    const name= useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const handleButtonClick =() =>{
      //Validate the form data
      // checkValidatedata(email ,password)
      // console.log(email.current.value);
      // console.log(password.current.calue);

       const message = checkValidatedata(email.current.value, password.current.value);
      setErrorMessage(message);

    }
    const toggleSigninForm=()=>{
         setIsSignForm(!isSignForm);
    }
  return (
    <div>
        <Header/>

        <div className="absolute">
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="Bg-logo"
        /> 
        </div>
     <form  
     onSubmit={(e) =>e.preventDefault() }
     className=" w-3/12 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 backdrop-opacity-85">
       <h1 
       className="font-bold text-3xl py-4">

        {isSignForm ? "Sign In" : "Sign Up" }
        </h1>
        <input
        ref={email}
         type="text" 
        placeholder="Email Address"
         className="p-4 my-4 w-full bg-gray-600"/>
      {!isSignForm && (
       <input
       ref={name}
       type="text" 
        placeholder="Full Name"
         className="p-4 my-4 w-full bg-gray-600"/>)}

        <input
        ref={password}
         type="password"
         placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-600"/>
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
         className="p-4 my-6 bg-red-700 rounded-lg" onClick={handleButtonClick}>
        {isSignForm ? "Sign In" : "Sign Up"}
            </button>
        <p 
        className="Py-4 cursor-pointer" 
        onClick={toggleSigninForm}>
        {isSignForm ? " New to Netflix? Sign Up Now" : "You Are already Registered? Sign In Now."}

        </p>
     </form>
    </div>
  )
}

export default Login


