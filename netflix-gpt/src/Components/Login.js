import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header/>

        <div className="absolute">
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="Bg-logo"
        /> 
        </div>
     <form className=" w-3/12 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 backdrop-opacity-85">
       <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input type="text" placeholder="email Address" className="p-4 my-4 w-full bg-gray-600"/>
        <input type="password" placeholder="Password" className="p-4 my-4 w-full  bg-gray-600"/>
       
        <button className="p-4 my-6 bg-red-700 rounded-lg">Sign in</button>
        <p className="Py-4">
            New to Netflix? Sign Up Now
        </p>
     </form>
    </div>
  )
}

export default Login