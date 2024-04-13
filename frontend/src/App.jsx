import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import { SnackbarProvider } from "notistack";
import Admin from "./Component/admin";
import AddProduct from "./Component/admin/AddProduct";
import Adminsignup from "./Component/Adminsignup";
import Adminsignin from "./Component/Adminsignin";
import Product from "./Component/Product";
import View from "./Component/View";
import ManageUser from "./Component/admin/ManageUser";
import Video from "./Component/Video";
import ManageProduct from "./Component/admin/ManageProduct";
// import UpdateProduct from "./Component/UpdateProduct";



const App = () => {
  return (
    <div>
      
        <BrowserRouter>
        <SnackbarProvider>
          <UserProvider>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/About" element={<About />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Video" element={<Video />} />
            {/* <Route path="/UpdateProduct/:id" element={<UpdateProduct />} /> */}
            <Route path="/view/:id" element={<View />} />
            

            <Route path="/Product" element={<Product />} />
            <Route path="/adminsignup" element={<Adminsignup />} />
            <Route path="/adminsignin" element={<Adminsignin />} />
            


            <Route path="/admin" element={<Admin />}>
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="ManageUser" element={<ManageUser />} />
              <Route path="ManageProduct" element={<ManageProduct />} />
      
              
              
            </Route>

          </Routes>
          </UserProvider>
          </SnackbarProvider>
        </BrowserRouter>
     
    </div>
  );
};

export default App;
