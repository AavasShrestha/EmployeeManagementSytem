import React from 'react'
import Header from '../../others/Header'
import TaskListNumber from '../../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  console.log(data)
  console.log(data.id);

  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header data = {data}/> 
        <TaskListNumber data = {data}/>
        <TaskList data = {data}/>
    </div>
  )
}

export default EmployeeDashboard
