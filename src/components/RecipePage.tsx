import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router';

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
  const [recipeData, setRecipeData] = useState<RecipeData>();
  
  useEffect(() => {
    if (isNew()) {
      setRecipeData(initialRecipeState);
    } else {
      const recipe = getRecipe(params.recipeId);
      if (!recipe) {
        // reroute to 404 page not found
        return;
      }
      setRecipeData(recipe);
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
