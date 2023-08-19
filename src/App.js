import React, { useState } from 'react';
import Login from './Components/Login';
import { Routes, Route} from 'react-router-dom'
import Profile from './Components/Profile';
function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/react-login-ui-phi.vercel.app/Profile" element={<Profile />} /> 
        
    </Routes>
  );
}

export default App;
