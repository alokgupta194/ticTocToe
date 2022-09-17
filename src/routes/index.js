import Home from "../container/home";
import About from "../container/about";
import Contact from "../container/contact";
import { Routes, Route } from "react-router-dom";

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}
