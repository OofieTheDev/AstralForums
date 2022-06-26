import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import CreateThread from "./pages/CreateThread";
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='createthread' element={<CreateThread />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
