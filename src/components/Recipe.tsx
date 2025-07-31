import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router';

import type { RecipeData } from '../types';

const recipe = {
  id: '1',
  name: 'Chicken',
  isExternal: false,
  ingredients: ['Salt', 'Chicken'],
  instructions: ['Salt the chicken', 'Cook the chicken'],
  notes: ["Don't forget to salt the chicken before you cook it"],
};

export function Recipe() {
  let params = useParams();
  const [recipeData, setRecipeData] = useState<RecipeData>();

  useEffect(() => {
    recipe.id = params.recipeId as string;
    // get recipe data from storage
    setRecipeData(recipe);
    // if params.recipeId is not found:
    if (false) {
      // reroute to 404 page not found
    }
  }, []);

  return (
    <section>
      {recipeData ? <Outlet context={recipeData} /> : <p>Loading...</p>}
    </section>
  );
}
