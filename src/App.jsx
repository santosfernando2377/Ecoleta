import Home from './pages/Home.jsx'
import Page404 from './pages/404.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard/Menu.jsx'
import Pedidos from './pages/Dashboard/Pedidos.jsx'
import Perfil from './pages/Dashboard/Perfil.jsx'
import Coleta from './pages/Dashboard/Solicitacao.jsx'
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
        <Route path='/dashboard/coletas' element={<Coleta/>}/>
      </Routes>
    </BrowserRouter>
  )
}