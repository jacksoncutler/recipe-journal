import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { getRecipeList } from '../storage';
import { isSortType } from '../types';
import type { RecipeListItemData, SortType } from '../types';

const defaultSortBy: SortType = 'createdAt';
const defaultReverse: boolean = true;

export function RecipeList() {
  const [searchParams] = useSearchParams();
  const [list, setList] = useState<RecipeListItemData[] | void>();
  const [sortBy, setSortBy] = useState<SortType>(() => {
    const sortByParam = searchParams.get('sortBy');
    return isSortType(sortByParam) ? (sortByParam as SortType) : defaultSortBy;
  });
  const [isReversed, setIsReversed] = useState<boolean>(() => {
    const isReversedParam = searchParams.get('isReversed');
    if (isReversedParam === 'true') return true;
    else if (isReversedParam === 'false') return false;
    else return defaultReverse;
  });

  useEffect(() => {
    setList(getRecipeList(sortBy, isReversed));
  }, [sortBy, isReversed]);

  function sortByNameHandler() {
    if (sortBy === 'name') {
      setIsReversed((prevState) => !prevState);
    } else {
      setSortBy('name');
      setIsReversed(false);
    }
  }

  function sortByCreatedAtHandler() {
    if (sortBy === 'createdAt') {
      setIsReversed((prevState) => !prevState);
    } else {
      setSortBy('createdAt');
      setIsReversed(true);
    }
  }

  function deleteHandler(data: RecipeListItemData) {
    console.log(`Deleting ${data.name}...`);
  }

  return (
    <ul id='recipe-list' className='recipe-list'>
      <li>
        <button onClick={sortByNameHandler}>name</button>
        <button onClick={sortByCreatedAtHandler}>createdAt</button>
      </li>
      {list ? (
        list.map((recipe) => (
          <RecipeListItem
            key={recipe.id}
            data={recipe}
            onDelete={deleteHandler}
          />
        ))
      ) : (
        <p>No recipes yet...</p>
      )}
    </ul>
  );
}

type ItemProps = {
  data: RecipeListItemData;
  onDelete: (data: RecipeListItemData) => void;
};

function RecipeListItem(props: ItemProps) {
  return (
    <li>
      <span>{props.data.name}</span>
      <span>{props.data.createdAt}</span>
      <button onClick={() => props.onDelete(props.data)}>Delete</button>
    </li>
  );
}
