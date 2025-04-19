import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

const submitHandler = (e) => {  // two way binding 
  e.preventDefault()
  console.log("Email is", email)  //Shows the data in Console.
  console.log("Password is ", password)

  setEmail("") //This empties the form after submission.
  setPassword("")
}  
  
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-500 p-20 rounded-xl'>
      
      <form
       onSubmit={(e) => {
          submitHandler(e)
       }}
        className='flex flex-col items-center justify-center'>
          
          <input value={email} onChange={(e)=>{
           
            // console.log(e.target)
            // console.log(e.target.value)
            console.log("Changing")
            setEmail(e.target.value)
          }}
          className='border-2 border-emerald-600 px-3 py-3 text-xl  text-black outline-none rounded-full  placeholder:text-white' type="email" placeholder='Enter your email'/>
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          className='border-2 border-emerald-600 px-3 py-3 text-xl  text-black outline-none rounded-full  placeholder:text-white' type="password" placeholder='Enter your password' />
          <button className='border-2 mt-5 bg-emerald-600 px-5 py-3 text-xl  text-white outline-none rounded-full  placeholder:text-white' > Login  </button>
        
        </form>

      </div>
    </div>
  )
}

export default Login