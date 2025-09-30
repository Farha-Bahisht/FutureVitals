import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from "./Pages/Aboutus"; // default export, correct import
import { Blog } from './Pages/Blog';
import { GetInvolved } from './Pages/GetInvolved';
import { Home } from './Pages/Home';
import { BlogDetail } from './Pages/BlogDetail';
import { BlogAdmin } from './Pages/BlogAdmin';
import { BlogAdminList } from './Pages/BlogAdminList';
import { EditBlog } from './Pages/EditBlog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} /> {/* ✅ Fixed here */}
          <Route path='/blog' element={<Blog />} />
          <Route path='/getinvolved' element={<GetInvolved />} />
          <Route path='/blog/:id' element={<BlogDetail />} />
          <Route path='/admin/blogs' element={<BlogAdminList />} />
          <Route path='/admin/blogs/new' element={<BlogAdmin />} />
          <Route path='/admin/blogs/edit/:id' element={<EditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
