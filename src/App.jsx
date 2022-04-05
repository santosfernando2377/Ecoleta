import Home from './pages/Home'
import Page404 from './pages/404'
import Login from './pages/Login'

import { Route, Routes, BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Page404/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}