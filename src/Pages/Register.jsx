import React from 'react'

const Register = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        alert('Account created successfully');
        window.location.href = '/Login';
    }
  return (
    <div className=' w-90 h-100% border-1 flex flex-col p-4'>
        <div className='p-3 w-full flex flex-col gap-2'>
          <h2 className='text-4xl font-bold'>Create your</h2>
          <h2 className='text-4xl font-bold text-violet-600'>PopX account</h2>
          <form className='flex flex-col mt-3 ' onSubmit={(e)=>{submitHandler(e);}}>
            <label htmlFor="name" className='text-sm font-bold text-violet-600 bg-white '>Name <span className='text-red-600'>*</span></label>
            <input type="text" placeholder='Enter your name' className='w-full border-1 p-2 mt-3 border-gray-400 rounded-md' />
            <label htmlFor="phone" className='text-sm font-bold text-violet-600 bg-white mt-2'>Phone number <span className='text-red-600'>*</span></label>
            <input type="text" placeholder='Phone number' className='w-full border-1 p-2 mt-3 border-gray-400 rounded-md' />
            <label htmlFor="email" className='text-sm font-bold text-violet-600 bg-white mt-2'>Email <span className='text-red-600'>*</span></label>
            <input type="email" placeholder='Enter email address' className='w-full border-1 p-2 mt-3 border-gray-400 rounded-md' />
            <label htmlFor="password" className='text-sm font-bold text-violet-600 bg-white mt-2'>Password <span className='text-red-600'>*</span></label>
            <input type="password" placeholder='Enter your password' className='w-full border-1 p-2 mt-3 border-gray-400 rounded-md' />
            <label htmlFor="company" className='text-sm font-bold text-violet-600 bg-white mt-2'>company name</label>
            <input type="text" placeholder='Enter Company name' className='w-full border-1 p-2 mt-3 border-gray-400 rounded-md' />
            <input type="submit" value="Create Account" className='w-full bg-violet-600 p-2 rounded-md hover:bg-violet-300 hover:text-black text-white mt-20' />
          </form>
        </div>
    </div>
  )
}

export default Register