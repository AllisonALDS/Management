import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import IndexPage from './pages/HomePage/index'
import Login from './pages/LoginPage/login'
import Register from './pages/registerPage/register'


const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' >
    <Route index element={ <IndexPage /> } />
    <Route path='/login' element={ <Login  /> } />
    <Route path='/register' element={ <Register  /> } />
  </Route>

))





function App() {
  
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App
