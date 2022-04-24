import Home from './pages/Home'
import Page404 from './pages/404'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard/index'
import Pedidos from './pages/Dashboard/Pedidos'
import Perfil from './pages/Dashboard/perfil'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Page404/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/dashboard/perfil' element={<Perfil/>}/>
        <Route path='/dashboard/solicitacao' element={<Pedidos/>}/>
      </Routes>
    </BrowserRouter>
  )
}