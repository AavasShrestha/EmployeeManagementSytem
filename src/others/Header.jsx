import React from 'react';

const Header = ({ data }) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    // Optional: reload or redirect to login
    window.location.reload(); 
  };

  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl font-medium px-4 py-4 text-white'>
        Hello, This is <br />
        <span className='text-3xl font-semibold'>
          {data?.firstName || 'Admin'}
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded cursor-pointer'
      >
        Log-Out
      </button>
    </div>
  );
};

export default Header;
