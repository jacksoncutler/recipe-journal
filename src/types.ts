export type RecipeData = {
  id: string;
  name: string;
  isExternal: boolean;
  ingredients?: string[];
  instructions?: string[];
  notes: string[];
};