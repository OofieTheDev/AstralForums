import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import HomePage from "./pages/HomePage";
import './styles.css';

import Forum from './Forum/Forum';
import CreatePage from './Forum/Pages/CreatePage';
import Topics from './Forum/Pages/Topics';
import Threads from './Forum/Pages/Threads';
import Athread from './Forum/Pages/Athread';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      


        
        <Route exact path='/Forum/t/:threadid' element={<Athread />} />

        <Route exact path='/Topics' element={<Topics />} />
        <Route exact path='/Threads' element={<Threads />} /> {/*Unused right now */}

        <Route exact path='/Forum' element={<Forum />} />

        <Route exact path='/Create' element={<CreatePage />} />
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
