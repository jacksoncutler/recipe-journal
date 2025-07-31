import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';

type Context = {
  id: string;
};

export function EditRecipe() {
  const context = useOutletContext<Context>();
  const [isExternal, setIsExternal] = useState<boolean>(false);

  useEffect(() => {
    if (!context.id) return;
    // get recipe data from storage
    // if external recipe:
    if (false) {
      setIsExternal(true);
    } else {
      // retrieve recipe ing/instr
    }
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
