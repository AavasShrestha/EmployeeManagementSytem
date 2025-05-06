import React from 'react'

const AcceptTask = ({ task }) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'> 
        <div className='flex justify-between '>
          <h3 className='bg-red-700 px-3 py-1 rounded '>High</h3>
          <h4 className='font-semibold'>{task.date}</h4>
        </div>

        <h2 className='mt-5 text-xl font-semibold'>{task.title}</h2>
        <p className='text-sm'>{task.description}</p>

        <div className='flex justify-between mt-4'>
          <button className='bg-green-500 py-1 px-2 text-sm cursor-pointer rounded-sm'>
            Mark as Completed
          </button>
          <button className='bg-red-500 py-1 px-2 text-sm cursor-pointer rounded-sm'>
            Mark as Failed
          </button>
        </div>
    </div>
  )
}

export default AcceptTask
