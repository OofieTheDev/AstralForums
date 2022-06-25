import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import HomePage from "./pages/HomePage";
import './styles.css';

import Forum from './Forum/Forum';
import CreatePage from './Forum/Pages/CreatePage';
import Topics from './Forum/Pages/Topics';
import Threads from './Forum/Pages/Threads';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      



        <Route exact path='/Topics' element={<Topics />} />
        <Route exact path='/Threads' element={<Threads />} />

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
