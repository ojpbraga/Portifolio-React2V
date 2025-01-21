import Loader from './components/Loader/Loader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loader/>}/>
        <Route path='Home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
