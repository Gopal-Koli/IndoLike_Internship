import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';

import Video from './Pages/Video/Video';
const App = () => {
  return (
    <div>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/video/:categoryID/:videoId" element={<vIDEO/>} />

      </Routes>
    </div>
  )
}

export default App
