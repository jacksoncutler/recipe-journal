import type { RecipeListItem, RecipeData } from './types';

type SortType = 'name' | 'createdAt';

export function getRecipe(id: RecipeData['id']): void | RecipeData {
  if (id === undefined) return;
  console.log('Retrieving recipe of id: ' + id);
}

export function createRecipe(data: RecipeData): void | RecipeData['id'] {
  console.log(
    'Creating recipe of id: ' + data.id + ' using following data: ' + data
  );
}

export function updateRecipe(data: RecipeData): void | RecipeData['id'] {
  console.log(
    'Updating recipe of id: ' + data.id + ' using following data: ' + data
  );
}

export function deleteRecipe(id: RecipeData['id']): void | RecipeData['id'] {
  if (id === undefined) return;
  console.log('Deleting recipe of id: ' + id);
}

export function getRecipeList(sortBy: SortType): void | RecipeListItem[] {
  console.log('Retrieving list of recipes sorted by: ' + sortBy);
}

export function createRecipeListItem(
  item: RecipeListItem
): void | RecipeListItem['id'] {
  console.log(
    'Creating list item of id: ' + item.id + 'using the following data: ' + item
  );
}

export function updateRecipeListItem(
  item: RecipeListItem
): void | RecipeListItem['id'] {
  console.log('Updating list item of id: ' + item.id) +
    'using the following data: ' +
    item;
}

export function deleteRecipeListItem(
  id: RecipeListItem['id']
): void | RecipeListItem['id'] {
  console.log('Deleting list item of id: ' + id);
}
