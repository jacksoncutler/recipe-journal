import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

import { App } from './components/App.tsx';
import { LandingPage } from './components/LandingPage.tsx';
import { RecipePage } from './components/RecipePage.tsx';
import { ViewRecipe } from './components/ViewRecipe.tsx';
import { EditRecipe } from './components/EditRecipe.tsx';
import { NotFoundPage } from './components/NotFoundPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path='recipe/:recipeId' element={<RecipePage />}>
            <Route index element={<ViewRecipe />} />
            <Route path='edit' element={<EditRecipe />} />
          </Route>
        </Route>
        <Route path='/404' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate replace to='/404' />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
