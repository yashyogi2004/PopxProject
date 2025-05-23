import React from 'react';
import Login from './Pages/Login';
import Landing from './Pages/Landing'; 
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Profile from './Pages/profile';

function App() {
  return (
    <div className='w-full min-h-screen bg-blue-0 flex justify-center p-4'>
      <Routes >
      <Route path='/' element={<Landing />} />
      <Route path='/Login' element={<Login />}/>
      <Route path='/Register' element={<Register />}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </div>
    
  )
}

export default App
