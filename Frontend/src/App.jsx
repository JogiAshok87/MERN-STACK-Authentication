import React,{Suspense,lazy} from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const Home  = lazy(()=>import('./pages/Home'))
const Login = lazy(()=>import('./pages/Login'))
const Register = lazy(()=>import('./pages/Register'))

const App = () => {
  return (
   <Router>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/register" element={<Register />}/>
      
    </Routes>
    </Suspense>
   </Router>
  )
}

export default App