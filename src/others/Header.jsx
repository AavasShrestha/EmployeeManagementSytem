import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium px-4 py-4'> Hello, This is <br /> <span className='text-3xl font-semibold'>Aavash</span></h1>
        <button className='bg-red-500 text-lg font-medium items text-white px-5 py-2 rounded-small cursor-pointer'> Log-Out</button>
    </div>
  )
}

export default Header