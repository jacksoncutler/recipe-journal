import { useState, useEffect } from 'react';

import type { RecipeListItem } from '../types';

// const initialList: Recipe[] = [
//   {
//     id: '1',
//     name: 'Cast Iron Pepperoni Pizza',
//   },
//   {
//     id: '2',
//     name: 'Grilled Gochujang Chicken',
//   },
//   {
//     id: '3',
//     name: 'Cantonese Fried Rice',
//   },
// ];

export function RecipeList() {
  const [list, _] = useState<RecipeListItem[]>([]);

  useEffect(() => {
    // get list from storage
    // setList(initialList);
  }, []);

  return (
    <ul id='recipe-list' className='recipe-list'>
      {list.map((recipe) => (
        <li key={recipe.id}>{recipe.name}</li>
      ))}
    </ul>
  );
}
