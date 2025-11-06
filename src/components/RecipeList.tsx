import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router';

import { getRecipeList, deleteRecipe } from '../storage';
import { isSortType } from '../types';
import type { RecipeListItemData, SortType } from '../types';

const defaultSortBy: SortType = 'recent';
const defaultReverse: boolean = false;

type ListProps = {
  forceUpdate: () => void;
};

export function RecipeList(props: ListProps) {
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

  function sortByRecentHandler() {
    if (sortBy === 'recent') {
      setIsReversed((prevState) => !prevState);
    } else {
      setSortBy('recent');
      setIsReversed(false);
    }
  }

  function deleteHandler(data: RecipeListItemData) {
    deleteRecipe(data.id);
    props.forceUpdate();
  }

  return (
    <ul id='recipe-list' className='recipe-list'>
      <li>
        <button onClick={sortByNameHandler}>name</button>
        <button onClick={sortByRecentHandler}>recent</button>
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
      <Link to={`recipe/${props.data.id}`}>
        <span>{props.data.name}</span>
        <span>{props.data.createdAt}</span>
      </Link>
      <Link to={`recipe/${props.data.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => props.onDelete(props.data)}>Delete</button>
    </li>
  );
}
