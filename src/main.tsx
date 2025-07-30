import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import { App } from './components/App.tsx';
import { Dashboard } from './components/Dashboard.tsx';
import { Recipe } from './components/Recipe.tsx';
import { ViewRecipe } from './components/ViewRecipe.tsx';
import { EditRecipe } from './components/EditRecipe.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path='recipe'>
            <Route path=':recipeId' element={<Recipe />}>
              <Route index element={<ViewRecipe />} />
              <Route path='edit' element={<EditRecipe />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
