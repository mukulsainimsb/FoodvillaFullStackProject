import { useContext, useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Header from './Components/Header/Header'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import FoodMenu from './Components/FoodMenu/FoodMenu'
import Footer from './Components/Footer/Footer'
import AboutComponent from './Components/About/AboutComponent.jsx/AboutComponent'
import AboutHeader from './Components/About/AboutHeader/AboutHeader'
import Hero1 from './Components/HeroContents/Hero1'
import { FoodContext } from './Components/ContextAPI/FoodContext'


function App() {

  function AuthenticatedRoute({children}){
    const {isAuthenticated}= useContext(FoodContext);
    if(isAuthenticated){
      return children;
    }
    return <Navigate to='/'></Navigate>
  }

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/hero' element={<AuthenticatedRoute><Hero1/></AuthenticatedRoute>}/>
        <Route path='/about' element={<AuthenticatedRoute><AboutHeader/></AuthenticatedRoute>}/>
        <Route path='/register' element={<AuthenticatedRoute><Register/></AuthenticatedRoute>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/foodmenu' element={<AuthenticatedRoute><FoodMenu/></AuthenticatedRoute>}/>
        <Route path='/footer' element={<AuthenticatedRoute><Footer/></AuthenticatedRoute>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
