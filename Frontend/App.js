import React from 'react'
import {BrowserRouter,Router,Routes} from "react-router-dom";
import Home from 'Crud App/Home';
function App(){
    return(
      <BrowserRouter>
          <Routes>
              <Router location={} navigator={} path='/' element={<Home/>}></Router>
          </Routes>
      </BrowserRouter>
    )
}

export  default  App