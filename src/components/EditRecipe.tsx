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

  function saveHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(id);
  }

  return (
    <form onSubmit={saveHandler} className='recipe-form'>
      <div className='recipe-form section'>
        <h2>Recipe Name</h2>
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
              setData={setIngredients as React.Dispatch<React.SetStateAction<string[]>>}
            />
            <EditRecipeSection
              title='Instructions'
              isOrdered={true}
              data={instructions!}
              setData={setInstructions as React.Dispatch<React.SetStateAction<string[]>>}
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
      <button type='submit'>Save</button>
    </form>
  );
}
