import { nanoid } from 'nanoid';

import type { RecipeListItem, RecipeData } from './types';

type SortType = 'name' | 'createdAt';

export function getRecipe(id: RecipeData['id']): void | RecipeData {
  if (id === undefined) return;
  console.log('Retrieving recipe\n' + id);
}

export function createRecipe(data: RecipeData): void | RecipeData['id'] {
  data.id = nanoid();
  data.createdAt = Date.now();
  console.log('Creating recipe');
  console.log(data);
}

export function updateRecipe(data: RecipeData): void | RecipeData['id'] {
  if (data.id === undefined) return;
  console.log('Updating recipe');
  console.log(data);
}

export function deleteRecipe(id: RecipeData['id']): void | RecipeData['id'] {
  if (id === undefined) return;
  console.log('Deleting recipe\n' + id);
}

export function getRecipeList(sortBy: SortType): void | RecipeListItem[] {
  console.log('Retrieving list of recipes sorted by: ' + sortBy);
}

export function createRecipeListItem(
  item: RecipeListItem
): void | RecipeListItem['id'] {
  console.log('Creating list item\n' + item.id);
}

export function updateRecipeListItem(
  item: RecipeListItem
): void | RecipeListItem['id'] {
  console.log('Updating list item\n' + item.id);
}

export function deleteRecipeListItem(
  id: RecipeListItem['id']
): void | RecipeListItem['id'] {
  console.log('Deleting list item\n' + id);
}
