import Loader from './components/Desktop/Loader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Desktop from './components/Desktop/Desktop';
import { AppsStorange } from './AppsContext';

function App() {
 
  return (
    <AppsStorange>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Desktop/>}/>
          <Route path='Home' element={<Home/>}/>
          <Route path='Login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </AppsStorange>
  )
}

export default App
