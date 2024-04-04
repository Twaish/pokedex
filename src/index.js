import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import "./global.css"
import Home from './pages/Home';
import About from './pages/About';
import Layout from './layout';
import { PaginationProvider } from './contexts/PaginationContext';

function App() {
  return (
    <PaginationProvider>
      <BrowserRouter basename='/pokedex'>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
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