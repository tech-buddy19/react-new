import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestion from './Suggestion'


function App() {

  return (
    <div className='d-flex vh-100'>
      <div className='w-25'><Sidebar /></div>
      <div className='w-50'><Feed /></div>
      <div className='w-25 '><Suggestion /></div>
      
      
    </div>
  )
}

export default App
