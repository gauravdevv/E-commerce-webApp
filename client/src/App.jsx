import { Route, Routes } from "react-router-dom";
import "./App.css";
import './components/Sidebar1.css'
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { Blogs } from "./pages/Blog";
import DashboardPage from "./pages/DashboardPage";
import Dashboard from "./components/Dashboard";
import AllProduct from "./pages/AllProduct";
import CreateProduct from "./pages/CreateProduct";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Reviews from "./pages/Reviews";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<DashboardPage />} />
          <Route path="/admin/allproduct" element={<AllProduct />} />
          <Route path="/admin/create" element={<CreateProduct />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
