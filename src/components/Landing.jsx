import React from 'react';
function LandingPage() {
    
    return(
        <div className='w-90 h-100% border-1 flex flex-col justify-end p-3'>
            <div className=' flex flex-col justify-center bottom-10 w-full h-[250px]  bg-white p-4' >
             <div className='flex flex-col gap-3'>
              <h1 className='text-2xl  font-bold'><span className='text-violet-600 text-3xl'>Welcome </span>to PopX</h1>
              <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet,<br /> Quis placeat nam similique</p>
             </div>
             <div className='mt-3 flex flex-col gap-3'>
                <button className='bg-violet-600 p-2 rounded-md hover:bg-violet-100 hover:text-black text-white' onClick={() => window.location.href = '/Register'}>Create Account</button>
                <button className='bg-violet-300 p-2 rounded-md hover:bg-violet-200' onClick={() => window.location.href = '/Login'}>Already Registered? Log in</button>
             </div>
            </div>
        </div>
  );
}

export default LandingPage;