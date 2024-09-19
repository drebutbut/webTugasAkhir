import { useState } from 'react';
import Home from "./routes/Home";
import Project from "./routes/Project";
import CaraKerja from "./routes/CaraKerja";
import Teknologi from "./routes/Teknologi";
import Result from "./routes/Result";
import Model from "./routes/Model";
import About from "./routes/About";
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path = "/" element = {<Home />} />
      
      <Route path = "/project" element = {<Project />} />
      <Route path = "/project/how" element = {<CaraKerja />} />
      <Route path = "/project/what" element = {<Teknologi />} />
      <Route path = "/project/result" element = {<Result />} />

      <Route path = "/predict" element = {<Model />} />

      <Route path = "/about" element = {<About />} />
    </Routes>
  )
}

export default App
