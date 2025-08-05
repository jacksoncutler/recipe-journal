import { useState } from 'react';
import { useOutletContext } from 'react-router';

import { EditRecipeSection } from './EditRecipeSection';
import { createRecipe } from '../storage';
import type { RecipeData } from '../types';

type Context = {
  data: RecipeData;
  isNewRecipe: boolean;
};

export function EditRecipe() {
  const context = useOutletContext<Context>();
  const [name, setName] = useState<RecipeData['name']>(context.data.name);
  const [isExternal, _] = useState<RecipeData['isExternal']>(
    context.data.isExternal
  );
  const [externalLink, setExternalLink] = useState<RecipeData['externalLink']>(
    context.data.externalLink
  );
  const [ingredients, setIngredients] = useState<RecipeData['ingredients']>(
    context.data.ingredients
  );
  const [instructions, setInstructions] = useState<RecipeData['instructions']>(
    context.data.instructions
  );
  const [notes, setNotes] = useState<RecipeData['notes']>(context.data.notes);

  function saveHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const saveData: RecipeData = {
      ...context.data,
      name,
      isExternal,
      notes,
    };
    if (isExternal) {
      saveData.externalLink = externalLink;
    } else {
      saveData.ingredients = ingredients;
      saveData.instructions = instructions;
    }
    createRecipe(saveData);
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
          <div className='recipe-form section'>
            <h2>Recipe Link</h2>
            <input
              value={externalLink}
              onChange={(e) => setExternalLink(e.target.value)}
            />
          </div>
        ) : (
          <>
            <EditRecipeSection
              title='Ingredients'
              isOrdered={false}
              data={ingredients!}
              setData={
                setIngredients as React.Dispatch<React.SetStateAction<string[]>>
              }
            />
            <EditRecipeSection
              title='Instructions'
              isOrdered={true}
              data={instructions!}
              setData={
                setInstructions as React.Dispatch<
                  React.SetStateAction<string[]>
                >
              }
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
