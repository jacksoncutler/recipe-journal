import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';

import type { RecipeData } from '../types';

export function EditRecipe() {
  const context = useOutletContext<RecipeData>();
  const [isExternal, setIsExternal] = useState<boolean>(false);

  useEffect(() => {
    // if external recipe:
    setIsExternal(context.isExternal);
  }, []);

  return (
    <>
      <div id='recipe-title-input'>
        <input />
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
            {
              // ingredients form
              // instructions form
            }
          </>
        )
        // notes form
      }
    </>
  );
}
