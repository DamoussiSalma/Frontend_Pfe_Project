import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/login/login.jsx';
import Dashboard from './components/pages/dashboard.jsx';
import ListUsers from './components/pages/ListUsers/listUsers.jsx';
import AnnonceList from './components/pages/annonceList/annonceList.jsx';
import AddForm from './components/formUser/formUser.jsx';
import './App.css';
import { UserContextProvider } from './components/userContext/userContext.jsx';
function App() {
  
  return (

    <div className='App'>
      <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/users' element={<ListUsers />} />
          <Route path='/annonces' element={<AnnonceList />} />
          <Route path='/ajouterUser' element={<AddForm />} />

        </Routes>
      </BrowserRouter>
      </UserContextProvider>
    </div>
      
    
  )
}

export default App
