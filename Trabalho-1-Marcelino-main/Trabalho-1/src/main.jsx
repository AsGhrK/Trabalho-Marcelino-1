import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes ,Route , BrowserRouter} from "react-router-dom"
import Home from "./Home/Home.jsx"
import Tudo from "./Tudo/tudo.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="/tudo" element={<Tudo />}></Route>
    </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
)
