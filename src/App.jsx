import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {Stock} from "./pages/Stock"
import {AddStock} from "./pages/AddStock"
import {SellStock } from "./pages/SellStock"
import {Login} from "./pages/Login"
import {Register} from "./pages/Register"
import {Navigation } from './components/Navigation'
import { Home } from './pages/Home'

function App() {
  return(
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/stock" element={<Stock/>}/>
        <Route path="/AddStock" element={<AddStock/>}/>
        <Route path="/SellStock" element={<SellStock/>}/>
      </Routes>
    </BrowserRouter>

    
  )
}

export default App