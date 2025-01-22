import Loader from './components/Loader/Loader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Desktop from './components/Desktop/Desktop';


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loader/>}/>
        <Route path='Home' element={<Home/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Desktop' element={<Desktop/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
