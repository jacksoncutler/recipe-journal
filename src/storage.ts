import { nanoid } from 'nanoid';

// import { isValidName, isValidExternalLink } from './validation';
import type { RecipeListItem, RecipeData } from './types';

type SortType = 'name' | 'createdAt';

export function getRecipe(id: RecipeData['id']): void | RecipeData {
  if (id === undefined) return;
  console.log('Retrieving recipe\n' + id);
}

export function createRecipe(data: RecipeData): void | RecipeData['id'] {
  data.id = nanoid();
  data.createdAt = Date.now();
  formatRecipeData(data);
  console.log('Creating recipe');
  console.log(data);
  const listItem: RecipeListItem = {
    id: data.id,
    createdAt: data.createdAt,
    name: data.name,
  };
  createRecipeListItem(listItem);
}

export function updateRecipe(data: RecipeData): void | RecipeData['id'] {
  if (data.id === undefined || data.createdAt === undefined) return;
  formatRecipeData(data);
  console.log('Updating recipe');
  console.log(data);
  const listItem: RecipeListItem = {
    id: data.id,
    createdAt: data.createdAt,
    name: data.name,
  };
  updateRecipeListItem(listItem);
}

export function deleteRecipe(id: RecipeData['id']): void | RecipeData['id'] {
  if (id === undefined) return;
  console.log('Deleting recipe\n' + id);
  deleteRecipeListItem(id);
}

export function getRecipeList(sortBy: SortType): void | RecipeListItem[] {
  console.log('Retrieving list of recipes sorted by: ' + sortBy);
}

function createRecipeListItem(
  item: RecipeListItem
): void | RecipeListItem['id'] {
  console.log('Creating list item\n' + item.id);
}

function updateRecipeListItem(
  item: RecipeListItem
): void | RecipeListItem['id'] {
  console.log('Updating list item\n' + item.id);
}

function deleteRecipeListItem(
  id: RecipeListItem['id']
): void | RecipeListItem['id'] {
  console.log('Deleting list item\n' + id);
}

// FORMATTING

function formatRecipeData(data: RecipeData): void {
  if (!data.isExternal) {
    data.ingredients = formatList(data.ingredients!);
    data.instructions = formatList(data.instructions!);
  }
  data.notes = formatList(data.notes);
}

function formatList(list: string[]): string[] {
  const newList = list.filter((value) => value.trim() !== '');
  return newList.length ? newList : [''];
}
