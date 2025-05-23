import React, { useState } from 'react';

function Register() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        if(email && password){
            window.location.href = '/profile';
        }
    }
    return (
        <div className=' w-90 h-100% border-1 flex flex-col p-4 text-wrap'>
         <div className=' mt-3 flex flex-col justify-center bottom-10 w-full h-[250px]  bg-white '>
            <div className='flex flex-col gap-2'>
                <h2 className='text-4xl font-bold'>Signin to your</h2>
                <h2 className='text-4xl font-bold'>PopX account</h2>
                <p className='text-sm text-gray-500 mt-2'>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit</p>
            </div>
            <div>
                <form onSubmit={(e)=>{submitHandler(e);}}>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value);}} type="email" placeholder='Enter email address' className='w-full border-1 p-2 mt-3 border-gray-400 rounded-md' />
                    <input value={password} onChange={(e)=>{setPassword(e.target.value);}} type="password" placeholder='Enter password'  className='w-full border-1 p-2 mt-3 border-gray-400 rounded-md' />
                    <button className='w-full bg-violet-600 p-2 rounded-md hover:bg-violet-100 hover:text-black text-white mt-3'>Log in</button>
                </form>
            </div>
         </div>
        </div>
    )
}

export default Register