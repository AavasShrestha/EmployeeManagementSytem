import React from 'react'

const NewTAsk = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5'> 
    <div className='flex justify-between'>
      <h3 className='bg-red-700 px-3 py-1 rounded'>{task.category}</h3>
      <h4 className='font-semibold'>{task.date}</h4>
    </div>

    <h2 className='mt-5 text-xl font-semibold'> Make a new Project</h2>
    <p className='text-sm '> {task.description}
        </p>

        <div className='mt-4'>
            <button className='bg-blue-500 py-1 px-2 text-sm cursor-pointer rounded-sm'>Accept Task</button>
            
        </div>
  </div>

  )
}

export default NewTAsk