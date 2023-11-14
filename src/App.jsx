import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./LoginForm.css";
import { About } from "./Components/About";
import { Categories } from "./Components/Categories";
import { MainBlogs } from "./Components/MainBlogs";
import { LoginForm } from "./Components/LoginForm";
import { NoPageFound } from "./Components/NoPageFound";
import { NavBar } from "./Components/NavBar";
import Footer from "./Components/Footer";
import { ViewBlogBox } from "./Components/ViewBlogBox";
import { ViewCategoryTypeBlog } from "./Components/BlogCategoryType";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainBlogs />} />
          <Route path="categories" element={<Categories />} />
          <Route path="about" element={<About />} />
          <Route path="Login" element={<LoginForm />} />
          <Route path="*" element={<NoPageFound />} />
          <Route path="Blogs" element={<ViewBlogBox />} />
          <Route path="/categories/type=" element={<ViewCategoryTypeBlog />} />
        </Routes>
        <Footer />
        {/* <ViewBlogBox /> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
