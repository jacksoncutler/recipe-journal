import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router';

import type { RecipeData } from '../types';

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

// const recipe: RecipeData = {
//   id: undefined,
//   createdAt: undefined,
//   name: 'Chicken',
//   isExternal: false,
//   ingredients: ['Salt', 'Chicken'],
//   instructions: ['Salt the chicken', 'Cook the chicken'],
//   notes: ["Don't forget to salt the chicken before you cook it"],
// };

const recipe: RecipeData = {
  id: undefined,
  createdAt: undefined,
  name: 'Chicken',
  isExternal: true,
  externalLink: 'test.com',
  notes: ["Don't forget to salt the chicken before you cook it"],
};

export function Recipe() {
  let location = useLocation();
  let params = useParams();
  const [recipeData, setRecipeData] = useState<RecipeData>();
  const [isNewRecipe, setIsNewRecipe] = useState<boolean>(false);

  useEffect(() => {
    if (isNew()) {
      setIsNewRecipe(true);
      setRecipeData({ ...initialRecipeState });
      return;
    }
    // get recipe data from storage
    // if params.recipeId is not found:
    if (false) {
      // reroute to 404 page not found
    }
    setRecipeData({ ...recipe, id: params.recipeId!, createdAt: Date.now() });
  }, []);

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
        <Outlet context={{ data: recipeData, isNewRecipe }} />
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
