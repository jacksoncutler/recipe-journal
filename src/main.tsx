import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import App from './App.tsx';
import Dashboard from './Dashboard.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Dashboard />} />
          {/* <Route path='/recipe'>
            <Route path=':rid' element={<Recipe />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
