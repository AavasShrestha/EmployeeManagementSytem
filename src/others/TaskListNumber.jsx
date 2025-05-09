import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-3   screen'>
        <div className='rounded-xl w-[30%] px-9 py-11 bg-red-400 '>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='rounded-xl w-[45%] px-9 py-11 bg-blue-400 '>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>

        <div className='rounded-xl w-[45%] px-9 py-11 bg-green-400 '>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        
        <div className='rounded-xl w-[45%] px-9 py-11 bg-yellow-400 '>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber


