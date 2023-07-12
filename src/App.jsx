import { Box } from '@mui/material'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import { useSelector } from 'react-redux'

function App() {

  const token = useSelector((state) => state.user.user)

  const checkLogin = () => {
    if (!token) {
      return <Navigate to={"/login"}/>
    } else {
      return <Navigate to={"/profile"}/>
    }
  }

  return (
    <Box className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={token ? <Outlet/> : checkLogin()}>
            <Route index element={<Home />}/>
            <Route path='profile' element={<Profile />}/>
          </Route>
          <Route path='/login' element={!token ? <Login /> : checkLogin()} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
