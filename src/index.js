import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import "./global.css"
import About from './pages/About';
import Pokedex from './pages/Pokedex';
import Layout from './layout';
import { PaginationProvider } from './context/PaginationContext';

function App() {
  return (
    <PaginationProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/pokedex" Component={Pokedex} />
            <Route path="/about" Component={About} />   
            <Route path="*" element={<Navigate to="/pokedex" />} />         
          </Routes>
        </Layout>
      </BrowserRouter>
    </PaginationProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
