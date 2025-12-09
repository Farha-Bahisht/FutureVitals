import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from "./Pages/Aboutus";
import Blog from './Pages/Blog';
import GetInvolved from './Pages/GetInvolved';
import Home from './Pages/Home';
import Team from './Pages/Team';
import News from './Pages/News';
import BlogDetail from './Pages/BlogDetail';
import ChapterVA from "./Pages/ChapterVA";
import ChapterTX from "./Pages/ChapterTX";
import Donate from "./Pages/Donate";
import Footer from "./Components/Footer/Footer";


// admin imports
import AdminLogin from "./Admin/Login";
import AdminLayout from "./Admin/AdminLayout";
import AboutAdmin from "./Admin/AboutAdmin";
import BlogAdmin from "./Admin/BlogAdmin";
import BlogAdminList from "./Admin/BlogAdminList";
import EditBlog from "./Admin/EditBlog";
import GetInvolvedAdmin from './Admin/GetInvolvedAdmin'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public routes wrapped with navbar+footer */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogDetail />} />
                  <Route path="/get-involved" element={<GetInvolved />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/donate" element={<Donate />} />
                  <Route path="/chapters/va" element={<ChapterVA />} />
                  <Route path="/chapters/tx" element={<ChapterTX />} />
                </Routes>
                <Footer />
              </>
            }
          />

          {/* Admin routes (no navbar/footer) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="about" element={<AboutAdmin />} />
            <Route path="blogs" element={<BlogAdminList />} />
            <Route path="blogs/new" element={<BlogAdmin />} />
            <Route path="blogs/edit/:id" element={<EditBlog />} />
            <Route path="/admin/getinvolved" element={<GetInvolvedAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
