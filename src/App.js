
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { Aboutus } from './Pages/Aboutus';
import { Blog } from './Pages/Blog';
import { GetInvolved } from './Pages/GetInvolved';
import { Home } from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/getinvolved' element={<GetInvolved/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;