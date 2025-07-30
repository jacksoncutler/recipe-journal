import { useState, useEffect } from 'react';

export function Recipe() {
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
      <div id='recipe-title'></div>
      <div id='recipe-body'>
        {isExternal ? (
          // use iframe or something for external recipe
          <></>
        ) : (
          <>
            <ul id='recipe-ingredients'></ul>
            <ol id='recipe-instructions'></ol>
          </>
        )}
        <ul id='recipe-notes'></ul>
      </div>
    </>
  );
}
