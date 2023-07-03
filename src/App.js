import "./App.css";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Layout from "./core/LayoutComponent/layout";
import Login from "./components/LoginPage/login";
import  Home from './components/HomePage/home';
import  About from './components/AboutPage/about';
import  Contact from './components/ProductPage/product';

import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate
} from "react-router-dom";

function App() {
  const AuthUser = () => {
    let isAuth = localStorage.getItem("auth");
    console.log("isAuth0", isAuth);
    return isAuth ? <Outlet /> : <Navigate to="Login" />;
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route element={<AuthUser />}>
            <Route path="/" element={<Layout />}>
             <Route path="/home" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
