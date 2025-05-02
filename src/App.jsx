import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import SigUp from './pages/SigUp'
import SigIn from './pages/SignIn.JSX'
import Dashboard from './pages/Dashboard'
import SendMoneyFriend from './pages/SendMoneyFriend'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/Sign-up' element={<SigUp/>} />
          <Route path='/Sign-in' element={<SigIn/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/send-money' element={<SendMoneyFriend/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
