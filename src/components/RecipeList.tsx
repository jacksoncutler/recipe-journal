import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router';

import { getRecipeList } from '../storage';
import type { RecipeListItem, SortType } from '../types';

export function RecipeList() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [list, setList] = useState<RecipeListItem[] | void>([]);
  const [sortBy, setSortBy] = useState<SortType>('createdAt');
  const [isReversed, setIsReversed] = useState<boolean>(true);

  useEffect(() => {
    setList(getRecipeList(sortBy, isReversed));
  }, []);

  return (
    <ul id='recipe-list' className='recipe-list'>
      {list ? (
        list.map((recipe) => <li key={recipe.id}>{recipe.name}</li>)
      ) : (
        <p>No recipes yet...</p>
      )}
    </ul>
  );
}
