import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/HomePage/index'
import Login from './pages/LoginPage/login'
import Register from './pages/registerPage/register'
import Management from './pages/pageManagement/management'
import AdminPanel from './pages/AdminPainel/AdminPanel'


const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' >
    <Route index element={ <Login/> } />
    <Route path='/register' element={ <Register  /> } />
    <Route path='/Agendamento' element={ <Management  /> } />
    <Route path='/Agendamento2' element={ <AdminPanel  /> } />
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
