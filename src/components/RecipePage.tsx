import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router';

import type { RecipeData } from '../types';
import { getRecipe } from '../storage';

const initialRecipeState: RecipeData = {
  id: undefined,
  createdAt: undefined,
  name: '',
  isExternal: false,
  externalLink: '',
  ingredients: [''],
  instructions: [''],
  notes: [''],
};

export function RecipePage() {
  let location = useLocation();
  let params = useParams();
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState<RecipeData>();

  useEffect(() => {
    if (isNew()) {
      setRecipeData(initialRecipeState);
    } else {
      const recipe = getRecipe(params.recipeId);
      if (recipe) setRecipeData(recipe);
      else navigate('/404');
    }
  }, [location.state]);

  function isNew() {
    if ('new' === params.recipeId) {
      const routeArr = location.pathname.split('/');
      if ('edit' === routeArr[routeArr.length - 1]) {
        return true;
      }
    }
    return false;
  }

  return (
    <section className='container'>
      {recipeData ? (
        <Outlet context={{ data: recipeData, isNewRecipe: isNew() }} />
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
