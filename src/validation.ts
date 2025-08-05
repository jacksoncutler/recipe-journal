import type { RecipeData } from './types';

const validUrl =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

export function isValidRecipeData(data: RecipeData): boolean {
  if (!isValidName(data.name)) return false;
  if (data.isExternal && !isValidExternalLink(data.externalLink)) return false;
  return true;
}

function isValidName(name: RecipeData['name']): boolean {
  return name.trim().length > 0;
}

function isValidExternalLink(link: RecipeData['externalLink']): boolean {
  return validUrl.test(link!);
}
