import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Pessoa from './pages/pessoa/Pessoa'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/pessoa" element={<Pessoa />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Routers