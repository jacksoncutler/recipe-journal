import { useOutletContext, Link } from 'react-router';

import type { RecipeData } from '../types';

type Context = {
  data: RecipeData;
}

export function ViewRecipe() {
  const context = useOutletContext<Context>();

  return (
    <>
      <Link to='/'><button>Return to recipes</button></Link>
      <Link to={`/recipe/${context.data.id}/edit`}><button>Edit</button></Link>
      <div id='recipe-title'>{context.data.name}</div>
      <div id='recipe-body'>
        {context.data.isExternal ? (
          // use iframe or something for external recipe
          <a href={context.data.externalLink}><u>Go to recipe</u></a>
        ) : (
          <>
            <h2>Ingredients</h2>
            <ul>
              {context.data.ingredients?.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <h2>Instructions</h2>
            <ol>
              {context.data.instructions?.map((instruction, i) => (
                <li key={i}>{instruction}</li>
              ))}
            </ol>
          </>
        )}
        <h2>Notes</h2>
        <ul>
          {context.data.notes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
