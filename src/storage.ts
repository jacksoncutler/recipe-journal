import { customAlphabet } from 'nanoid';

import { isValidRecipeData } from './validation';
import type { RecipeData, RecipeListItemData, SortType } from './types';

const nanoid = customAlphabet('1234567890abcdef', 7)
const recipeListKey = 'recipeList';

export function getRecipe(id: RecipeData['id']): void | RecipeData {
  if (id === undefined) return;
  const dataString = localStorage.getItem(id);
  if (!dataString) return;
  return JSON.parse(dataString) as RecipeData;
}

export function createRecipe(data: RecipeData): void | RecipeData['id'] {
  if (!isValidRecipeData(data)) return;
  data.id = nanoid();
  data.createdAt = Date.now();
  formatRecipeData(data);
  localStorage.setItem(data.id, JSON.stringify(data));
  const listItem: RecipeListItemData = {
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
  const listItem: RecipeListItemData = {
    id: data.id,
    createdAt: data.createdAt,
    name: data.name,
  };
  updateRecipeListItem(listItem);
}

export function deleteRecipe(id: RecipeData['id']): void | RecipeData['id'] {
  if (id === undefined) return;
  localStorage.removeItem(id);
  deleteRecipeListItem(id);
}

export function getRecipeList(
  sortBy: SortType,
  reversed: boolean
): void | RecipeListItemData[] {
  const stringifiedList = localStorage.getItem(recipeListKey);
  if (stringifiedList === null) return;
  const recipeList: RecipeListItemData[] = JSON.parse(stringifiedList);
  const sortedList = recipeList.sort((a, b) =>
    a[sortBy] < b[sortBy] ? -1 : 1
  );
  return reversed ? sortedList.reverse() : sortedList;
}

function createRecipeListItem(
  item: RecipeListItemData
): void | RecipeListItemData['id'] {
  let recipeList: RecipeListItemData[];
  const stringifiedList = localStorage.getItem(recipeListKey);
  if (stringifiedList === null) recipeList = [];
  else recipeList = JSON.parse(stringifiedList);
  recipeList.push(item);
  localStorage.setItem(recipeListKey, JSON.stringify(recipeList));
}

function updateRecipeListItem(
  item: RecipeListItemData
): void | RecipeListItemData['id'] {
  let recipeList: RecipeListItemData[];
  const stringifiedList = localStorage.getItem(recipeListKey);
  if (stringifiedList === null) {
    recipeList = [item];
    localStorage.setItem(recipeListKey, JSON.stringify(recipeList));
  } else {
    recipeList = JSON.parse(stringifiedList);
    recipeList = recipeList.map((recipe) =>
      item.id === recipe.id ? item : recipe
    );
    localStorage.setItem(recipeListKey, JSON.stringify(recipeList));
  }
}

function deleteRecipeListItem(
  id: RecipeListItemData['id']
): void | RecipeListItemData['id'] {
  const stringifiedList = localStorage.getItem(recipeListKey);
  if (stringifiedList === null) return;
  let recipeList = JSON.parse(stringifiedList) as RecipeListItemData[];
  recipeList = recipeList.filter((recipe) => id !== recipe.id);
  localStorage.setItem(recipeListKey, JSON.stringify(recipeList));
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
