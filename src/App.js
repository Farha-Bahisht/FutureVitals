import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from "./Pages/Aboutus";
import { Blog } from './Pages/Blog';
import GetInvolved from './Pages/GetInvolved';
import { Home } from './Pages/Home';
import { BlogDetail } from './Pages/BlogDetail';
import { BlogAdmin } from './Pages/BlogAdmin';
import { BlogAdminList } from './Pages/BlogAdminList';
import { EditBlog } from './Pages/EditBlog';
import Donate from "./Pages/Donate";
import Footer from "./Components/Footer/Footer";  // ✅ Match actual file name casing

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/get-involved' element={<GetInvolved />} />
          <Route path='/blog/:id' element={<BlogDetail />} />
          <Route path='/admin/blogs' element={<BlogAdminList />} />
          <Route path='/admin/blogs/new' element={<BlogAdmin />} />
          <Route path='/admin/blogs/edit/:id' element={<EditBlog />} />
          <Route path='/donate' element={<Donate />} />
        </Routes>
        
        {/* ✅ Footer should be outside Routes */}
        <Footer />  
      </BrowserRouter>
    </div>
  );
}

export default App;
