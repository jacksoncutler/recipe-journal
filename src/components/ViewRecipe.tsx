import { useState, useEffect } from 'react';

export function ViewRecipe() {
  const [isExternal, setIsExternal] = useState<boolean>(false);

  useEffect(() => {
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
      <div id='recipe-title'>Recipe Name</div>
      <div id='recipe-body'>
        {isExternal ? (
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
