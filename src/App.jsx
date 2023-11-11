import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./LoginForm.css";
import { About } from "./Components/About";
import { Categories } from "./Components/Categories";
import { MainBlogs } from "./Components/MainBlogs";
import { LoginForm } from "./Components/LoginForm";
import { NoPageFound } from "./Components/NoPageFound";
import { NavBar } from "./Components/NavBar";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
