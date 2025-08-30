import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { getRecipeList } from '../storage';
import { isSortType } from '../types';
import type { RecipeListItem, SortType } from '../types';

const defaultSortBy: SortType = 'createdAt';
const defaultReverse: boolean = true;

export function RecipeList() {
  const [searchParams, ] = useSearchParams();
  const [list, setList] = useState<RecipeListItem[] | void>();
  const [sortBy, setSortBy] = useState<SortType>(() => {
    const sortByParam = searchParams.get('sortBy');
    return isSortType(sortByParam) ? (sortByParam as SortType) : defaultSortBy;
  });
  const [isReversed, setIsReversed] = useState<boolean>(() => {
    const isReversedParam = searchParams.get('isReversed');
    if (isReversedParam === 'true')
      return true;
    else if (isReversedParam === 'false')
      return false;
    else return defaultReverse;
  });

  useEffect(() => {
    console.log(sortBy, isReversed);
    setList(getRecipeList(sortBy, isReversed));
  }, [sortBy, isReversed]);

  function sortByNameHandler() {
    if (sortBy === 'name') {
      setIsReversed(prevState => !prevState);
    } else {
      setSortBy('name');
      setIsReversed(false);
    }
  }

  function sortByCreatedAtHandler() {
    if (sortBy === 'createdAt') {
      setIsReversed(prevState => !prevState);
    } else {
      setSortBy('createdAt');
      setIsReversed(true);
    }
  }

  return (
    <ul id='recipe-list' className='recipe-list'>
      <li>
        <button onClick={sortByNameHandler}>name</button>
        <button onClick={sortByCreatedAtHandler}>createdAt</button>
      </li>
      {list ? (
        list.map((recipe) => <li key={recipe.id}>{recipe.name}</li>)
      ) : (
        <p>No recipes yet...</p>
      )}
    </ul>
  );
}
