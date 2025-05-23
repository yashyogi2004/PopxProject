import React from 'react'

const profile = () => {
  return (
    <div className=' w-90 h-100% border-1 flex flex-col p-4 text-wrap'>
      <div className='  flex flex-col w-full h-200px  bg-violet-100 border-b-1 p-2'>
           <h3 className='text-2xl font-bold text-grey-600'>Account Settings</h3>        
      </div>
      <div className='information mt-3 flex flex-col gap-2.5 border-b-2 border-dotted p-3'>
       <div className='flex gap-10'>
         <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" height={"50px"} width={"50px"}  />
         <span>
            <h3 className='text-l font-bold'>Martin</h3>
          <h4 className='text-sm text-gray-500'>Martin@gmail</h4>
         </span>
       </div>
       <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis placeat nam similique</p>
      </div>
    </div>
  )
}

export default profile