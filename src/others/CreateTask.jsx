import React from 'react'

const CreateTask = () => {
  return (
    <div>
        {/* h-screen ,  bg-gray-800 */}
         <div className=' overflow-auto w-full rounded-xl p-10 px-4 py-4'>
              
                <div>
                    <form action="" className='flex flex-wrap  w-full items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-500 mb-0.5'>Tasks Title</h3>
                            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Enter the title' />
                        </div>
                            
                        <div>
                            <h3  className='text-sm text-gray-500 mb-0.5'>Date</h3>
                            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" placeholder='Enter the date' />
                        </div>

                        <div>
                            <h3  className='text-sm text-gray-500 mb-0.5'>Assign To:</h3>
                            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Whom to Assign' />
                        </div>

                        <div>
                            <h3  className='text-sm text-gray-500 mb-0.5'>Category</h3>
                            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Which category does it belongs to' />
                        </div>

                        </div>

                        <div className='w-2/5 flex flex-col items-start'>
                            <h3 className='text-sm text-gray-500 mb-0.5'>Description</h3>
                            <textarea name="" id="" cols="30" rows={10} className='w-full h-55 py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray=400'></textarea>

                            <button className='hover:bg-amber-400 text-sm rounded bg-amber-500 mt-4 w-full  my-5 px-5 py-3 cursor-pointer'> Create Task</button>
                        </div>


                    </form>
                </div>

            </div>

    </div>
  )
}

export default CreateTask