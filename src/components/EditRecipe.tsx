import { useEffect } from 'react';
import { useOutletContext } from 'react-router';

type Context = {
  id: string;
};

export function EditRecipe() {
  const context = useOutletContext<Context>();

  useEffect(() => {
    if (!context.id) return;
  }, []);

  return <></>;
}
