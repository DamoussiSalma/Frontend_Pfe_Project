import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './components/login/login.jsx'
import Dashboard from './components/pages/dashboard.jsx'
import ListUsers from './components/pages/ListUsers/listUsers.jsx'
import './App.css'
import { UserContextProvider } from './components/userContext/userContext.jsx'
import Home from './components/siteVitrine/home.jsx'
function App() {
  
  return (

    <div className='App'>
      <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/users' element={<ListUsers />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      </UserContextProvider>
    </div>
      
    
  )
}

export default App
