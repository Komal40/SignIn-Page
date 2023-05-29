
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/SignIn/Login'
import SignUp from './components/SignUp/SignUp'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path= '/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Login/> */}
    </>
  )
}

export default App

