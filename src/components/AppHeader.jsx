import React from 'react';

function AppHeader() {
  return (
    <header className='flex justify-between items-center p-4 text-lg font-bold'>
      <div className='text-xl'>
        Paytm
      </div>

      <div className='flex items-center gap-3 font-semibold'>
        <div>Hello</div>
        <div className='bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center text-sm text-white'>
          U
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
