import { useState, useEffect } from 'react';

type Recipe = {
  id: string;
  name: string;
};

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
  const [list, _] = useState<Recipe[]>([]);

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
