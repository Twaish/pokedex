import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';

import "./global.css"
import Home from './pages/Home';
import About from './pages/About';
import Pokedex from './pages/Pokedex';
import Layout from './layout';
import { PaginationProvider } from './contexts/PaginationContext';

function App() {
  return (
    <PaginationProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* <Route path="/" Component={Home} /> */}
            <Route path="/about" Component={About} />
            <Route path="/pokedex" Component={Pokedex} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </PaginationProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

if (window.location.pathname === "/") {
  window.location.replace("/pokedex")
}