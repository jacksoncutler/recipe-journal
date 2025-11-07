import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router';

import { DynamicFormSection } from './DynamicForm';
import { ValidatedInput } from './ValidatedInput';
import { createRecipe, updateRecipe } from '../storage';
import {
  isValidRecipeData,
  isValidName,
  isValidExternalLink,
} from '../validation';
import type { RecipeData } from '../types';

type Context = {
  data: RecipeData;
  isNewRecipe: boolean;
};

export function EditRecipe() {
  const navigate = useNavigate();
  const context = useOutletContext<Context>();
  const [name, setName] = useState<RecipeData['name']>(context.data.name);
  const [isExternal, setIsExternal] = useState<RecipeData['isExternal']>(
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
  const [isValidNameState, setIsValidNameState] = useState<boolean>(true);
  const [isValidExternalLinkState, setIsValidExternalLinkState] =
    useState<boolean>(true);

  function saveHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const saveData = buildSaveData();
    if (!isValidRecipeData(saveData)) {
      setInvalidInputStates();
      return;
    }
    let id;
    if (context.isNewRecipe) {
      id = createRecipe(saveData);
    } else {
      id = updateRecipe(saveData);
    }
    if (id) {
      navigate(`/recipe/${id}`, {
        state: { saved: true },
      });
    }

    function buildSaveData(): RecipeData {
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
      return saveData;
    }

    function setInvalidInputStates() {
      setIsValidNameState(isValidName(name));
      if (isExternal)
        setIsValidExternalLinkState(isValidExternalLink(externalLink));
    }
  }

  function cancelHandler() {
    const id = context.data.id;
    if (id && !context.isNewRecipe) navigate(`/recipe/${id}`);
    else navigate('/');
  }

  return (
    <form onSubmit={saveHandler} className='recipe-form'>
      <div className='recipe-form section'>
        <h2>Recipe Name</h2>
        <ValidatedInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='name'
          isValid={isValidNameState}
        />
      </div>
      <span className='recipe-form-toggle'>
        <input
          id='is-external'
          type='checkbox'
          checked={isExternal}
          onChange={() => {
            setIsExternal((prevState) => !prevState);
          }}
        />
        <label htmlFor='is-external'>Use existing recipe</label>
      </span>
      {
        // toggle button for external recipe
        isExternal ? (
          <div className='recipe-form section'>
            <h2>Recipe Link</h2>
            <ValidatedInput
              value={externalLink!}
              onChange={(e) => setExternalLink(e.target.value)}
              type='externalLink'
              isValid={isValidExternalLinkState}
            />
          </div>
        ) : (
          <>
            <DynamicFormSection
              title='Ingredients'
              isOrdered={false}
              data={ingredients!}
              setData={
                setIngredients as React.Dispatch<React.SetStateAction<string[]>>
              }
            />
            <DynamicFormSection
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
      <DynamicFormSection
        title='Notes'
        isOrdered={false}
        data={notes}
        setData={setNotes}
      />
      <button onClick={cancelHandler}>Cancel</button>
      <button type='submit'>Save</button>
    </form>
  );
}
