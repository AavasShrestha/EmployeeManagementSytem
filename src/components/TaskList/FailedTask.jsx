import React from 'react'

const FailedTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'> 
        <div className='flex justify-between'>
          <h3 className='bg-red-700 px-3 py-1 rounded'>High</h3>
          <h4 className='font-semibold'>20 Jan 2025</h4>
        </div>

        <h2 className='mt-5 text-xl font-semibold'> Make a new Project</h2>
        <p className='text-sm '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, libero voluptatem. 
          Distinctio ullam similique obcaecati dolore harum 
          laborum non maiores temporibus illum assumenda illo quis, 
          quisquam aut praesentium veritatis. Temporibus.
            </p>

            <div className='mt-3 '>
                <button className='bg-green-500 py-1 px-2 text-sm cursor-pointer rounded-sm'>Complete</button>
            </div>
      </div>

  )
}

export default FailedTask