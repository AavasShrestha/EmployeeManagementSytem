import React, { use, useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {


  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  // console.log(authData.employees.find((e) => {
  //   email == e.email && e.password == password
  // } ))

  useEffect(()=> {

    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  }, [authData]);
  
    
  const handleLogin = (email, password ) => {
    if (email == 'admin@gmail.com' && password == '123')
    {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }

    else if(authData)
    {
      const employee = authData.employees.find((e)=> email == e.email && e.password)
      if(employee){
    
        setUser('employee')
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
      
      }   
    }

    else
    alert("Invalid Credentials")
  }



  return (
    <>
   { !user ? < Login  handleLogin = {handleLogin}  /> : '' }
   {user == 'admin' ? <AdminDashboard /> :  <EmployeeDashboard />}

    {/* {!user ? <Login /> : '' } */}
{/* 
   {user == 'admin' ? <AdminDashboard /> : <AdminDashboard data = {loggedInUserData} /> }
   {user == 'employee' && <EmployeeDashboard data = {loggedInUserData}/>  }
 */}

   {/* <EmployeeDashboard />    */}
   {/* <AdminDashboard/> */}
    </>
  )
}

export default App