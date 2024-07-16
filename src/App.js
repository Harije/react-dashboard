import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Sidebar from "./components/layouts/sidebar";
import Header from "./components/layouts/header";
import Dashboard from "./components/dashboard";
import Users from "./components/users";
import Products from "./components/products";
import Vendors from "./components/vendors";


import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from "./components/users/adduser";

function App() {
  return (
    <BrowserRouter>
    <div className="d-flex" id="wrapper">
      <Sidebar/>
      <div id="page-content-wrapper">
      <Header/>
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/users" element={<Users />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/products" element={<Products />} />
            <Route path="/vendors" element={<Vendors />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
