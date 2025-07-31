import { useState } from 'react';
import { useOutletContext } from 'react-router';

import { EditRecipeSection } from './EditRecipeSection';
import type { RecipeData } from '../types';

export function EditRecipe() {
  const context = useOutletContext<RecipeData>();
  const [name, setName] = useState<RecipeData['name']>(context.name);
  const [isExternal, _] = useState<RecipeData['isExternal']>(
    context.isExternal
  );
  const [ingredients, setIngredients] = useState<RecipeData['ingredients']>(
    context.ingredients
  );
  const [instructions, setInstructions] = useState<RecipeData['instructions']>(
    context.instructions
  );
  const [notes, setNotes] = useState<RecipeData['notes']>(context.notes);

  return (
    <>
      <div id='recipe-title-input'>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      {
        // toggle button for external recipe
        isExternal ? (
          <>
            {
              // input for external recipe link
            }
          </>
        ) : (
          <>
            <EditRecipeSection
              title='Ingredients'
              isOrdered={false}
              data={ingredients!}
              setData={setIngredients}
            />
            <EditRecipeSection
              title='Instructions'
              isOrdered={true}
              data={instructions!}
              setData={setInstructions}
            />
          </>
        )
      }
      <EditRecipeSection
        title='Notes'
        isOrdered={false}
        data={notes}
        setData={setNotes}
      />
    </>
  );
}
