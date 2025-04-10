import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SideBar from './components/layout/SideBar'

import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import './App.css'



function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Logout />} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
     </Router>
    </>
  )
}

export default App
