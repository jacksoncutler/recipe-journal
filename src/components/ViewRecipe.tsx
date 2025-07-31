import { useOutletContext } from 'react-router';

import type { RecipeData } from '../types';

export function ViewRecipe() {
  const context = useOutletContext<RecipeData>();

  return (
    <>
      <div id='recipe-title'>Recipe Name</div>
      <div id='recipe-body'>
        {context.isExternal ? (
          // use iframe or something for external recipe
          <></>
        ) : (
          <>
            <h2>Ingredients</h2>
            <ul></ul>
            <h2>Instructions</h2>
            <ol></ol>
          </>
        )}
        <h2>Notes</h2>
        <ul></ul>
      </div>
    </>
  );
}
