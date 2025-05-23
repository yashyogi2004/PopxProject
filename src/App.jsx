import React from 'react';
import Login from './components/Login';
import Landing from './components/Landing'; 
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Profile from './components/profile';

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
