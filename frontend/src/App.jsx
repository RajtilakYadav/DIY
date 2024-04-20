import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Component/main/Home";
import About from "./Component/main/About";
import Login from "./Component/main/Login";
import Signup from "./Component/main/Signup";
import { SnackbarProvider } from "notistack";
import Admin from "./Component/admin";
import AddProduct from "./Component/admin/AddProduct";
import Adminsignup from "./Component/main/Adminsignup";
import Adminsignin from "./Component/main/Adminsignin";
import Product from "./Component/user/Product";
import View from "./Component/user/View";
import ManageUser from "./Component/admin/ManageUser";
import Video from "./Component/user/Video";
import ManageProduct from "./Component/admin/ManageProduct";
// import UpdateProduct from "./Component/UpdateProduct";
import { UserProvider } from "./UserContext";
import Cart from "./Component/user/Cart";
import ContactUs from "./Component/main/ContactUs";
import Feedback from "./Component/main/Feedback";
import UpdateProduct from "./Component/admin/UpdateProduct";
import { ProductProvider } from "./context/ProductContext";
import AdminAuth from "./auth/AdminAuth";
import Main from "./Component/main";
import User from "./Component/user";
import Notfound from "./Notfound";



const App = () => {
  return (
    <div>

      <BrowserRouter>
        <ProductProvider>
          <SnackbarProvider>
            <UserProvider>

              <Routes>
                <Route path="/" element={<Navigate to="/main/home" />} />
                <Route path="main" element={<Main />}>
                  <Route path="Home" element={<Home />} />
                  <Route path="login" element={<Login />} />
                  <Route path="Signup" element={<Signup />} />
                  <Route path="adminsignup" element={<Adminsignup />} />
                  <Route path="adminsignin" element={<Adminsignin />} />
                  <Route path="About" element={<About />} />
                  <Route path="ContactUs" element={<ContactUs />} />
                  <Route path="Feedback" element={<Feedback />} />
                </Route>


                <Route path="user" element={<User />}>
                  <Route path="Product" element={<Product />} />
                  <Route path="Cart" element={<Cart />} />
                  <Route path="Video" element={<Video />} />
                  <Route path="view/:id" element={<View />} />
                </Route>

                <Route path="/admin" element={<AdminAuth><Admin /></AdminAuth>}>
                  <Route path="addproduct" element={<AddProduct />} />
                  <Route path="ManageUser" element={<ManageUser />} />
                  <Route path="ManageProduct" element={<ManageProduct />} />
                  <Route path="UpdateProduct/:id" element={<UpdateProduct />} />
                </Route>
             <Route path="*" element={<Notfound/>}/>
              </Routes>
            </UserProvider>
          </SnackbarProvider>
        </ProductProvider>
      </BrowserRouter>

    </div>
  );
};

export default App;
