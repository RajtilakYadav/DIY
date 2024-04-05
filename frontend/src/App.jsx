import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import { SnackbarProvider } from "notistack";
import Browse from "./Component/Browse";
import Admin from "./Component/admin";
import AddProduct from "./Component/admin/AddProduct";
import Adminsignup from "./Component/Adminsignup";
import Adminsignin from "./Component/Adminsignin";
const App = () => {
  return (
    <div>
      
        <BrowserRouter>
        <SnackbarProvider>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/About" element={<About />} />
            <Route path="/Signup" element={<Signup />} />

            <Route path="/browse" element={<Browse />} />
            <Route path="/adminsignup" element={<Adminsignup />} />
            <Route path="/adminsignin" element={<Adminsignin />} />


            <Route path="/admin" element={<Admin />}>
              <Route path="addproduct" element={<AddProduct />} />
            </Route>

          </Routes>
          </SnackbarProvider>
        </BrowserRouter>
     
    </div>
  );
};

export default App;
