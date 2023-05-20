import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import {useState,useEffect } from "react";

function App() {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?_page=10&_limit=10')
      .then(response => response.json())
      .then(json => console.log(json))
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
