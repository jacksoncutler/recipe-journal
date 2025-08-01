import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';
import { nanoid } from 'nanoid';

import { EditRecipeSection } from './EditRecipeSection';
import type { RecipeData } from '../types';

type Context = {
  data: RecipeData;
  isNewRecipe: boolean;
}

export function EditRecipe() {
  const context = useOutletContext<Context>();
  const [id, setId] = useState<string>(context.data.id);
  const [name, setName] = useState<RecipeData['name']>(context.data.name);
  const [isExternal, _] = useState<RecipeData['isExternal']>(
    context.data.isExternal
  );
  const [ingredients, setIngredients] = useState<RecipeData['ingredients']>(
    context.data.ingredients
  );
  const [instructions, setInstructions] = useState<RecipeData['instructions']>(
    context.data.instructions
  );
  const [notes, setNotes] = useState<RecipeData['notes']>(context.data.notes);

  useEffect(() => {
    if (context.isNewRecipe) {
      setId(nanoid());
    }
  }, [])

  console.log(id);

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
