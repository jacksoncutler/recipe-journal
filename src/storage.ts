import { nanoid } from 'nanoid';

import { isValidRecipeData } from './validation';
import type { RecipeListItem, RecipeData } from './types';

type SortType = 'name' | 'createdAt';

export function getRecipe(id: RecipeData['id']): void | RecipeData {
  if (id === undefined) return;
  console.log('Retrieving recipe\n' + id);
}

export function createRecipe(data: RecipeData): void | RecipeData['id'] {
  if (!isValidRecipeData(data)) return;
  data.id = nanoid();
  data.createdAt = Date.now();
  formatRecipeData(data);
  localStorage.setItem(data.id, JSON.stringify(data));
  const listItem: RecipeListItem = {
    id: data.id,
    createdAt: data.createdAt,
    name: data.name,
  };
  createRecipeListItem(listItem);
}

export function updateRecipe(data: RecipeData): void | RecipeData['id'] {
  if (data.id === undefined || data.createdAt === undefined) return;
  if (!isValidRecipeData(data)) return;
  formatRecipeData(data);
  localStorage.setItem(data.id, JSON.stringify(data));
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
  let recipeList: RecipeListItem[];
  const stringifiedList = localStorage.getItem('recipeList');
  if (stringifiedList === null) recipeList = [];
  else recipeList = JSON.parse(stringifiedList);
  recipeList.push(item);
  localStorage.setItem('recipeList', JSON.stringify(recipeList));
}

function updateRecipeListItem(
  item: RecipeListItem
): void | RecipeListItem['id'] {
  let recipeList: RecipeListItem[];
  const stringifiedList = localStorage.getItem('recipeList');
  if (stringifiedList === null) {
    recipeList = [item];
    localStorage.setItem('recipeList', JSON.stringify(recipeList));
  } else {
    recipeList = JSON.parse(stringifiedList);
    const updatedList = recipeList.map((recipe) =>
      item.id === recipe.id ? item : recipe
    );
    localStorage.setItem('recipeList', JSON.stringify(updatedList));
  }
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
