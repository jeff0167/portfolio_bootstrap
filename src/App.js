import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {  // shift + alt + f  to format
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="portfolio_bootstrap" element={<HomePage></HomePage>}></Route>
          <Route path="portfolio_bootstrap/about" element={<About></About>}></Route>
          <Route path="portfolio_bootstrap/projects" element={<Projects></Projects>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;