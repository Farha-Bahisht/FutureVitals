import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <nav>
        <Link to="/admin/about">About Us</Link> |{" "}
        <Link to="/admin/getinvolved">Get Involved</Link> |{" "}
        <Link to="/admin/blogs">Blogs</Link>
      </nav>
      <div style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}
