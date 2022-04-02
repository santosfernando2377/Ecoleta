import Home from './pages/Home'
import Page404 from './pages/404'

import { Route, Routes, BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  )
}