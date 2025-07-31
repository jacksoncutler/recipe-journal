import { useOutletContext } from 'react-router';

import type { RecipeData } from '../types';

export function ViewRecipe() {
  const context = useOutletContext<RecipeData>();

  return (
    <>
      <div id='recipe-title'>{context.name}</div>
      <div id='recipe-body'>
        {context.isExternal ? (
          // use iframe or something for external recipe
          <></>
        ) : (
          <>
            <h2>Ingredients</h2>
            <ul>
              {context.ingredients?.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <h2>Instructions</h2>
            <ol>
              {context.instructions?.map((instruction, i) => (
                <li key={i}>{instruction}</li>
              ))}
            </ol>
          </>
        )}
        <h2>Notes</h2>
        <ul>
          {context.notes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
