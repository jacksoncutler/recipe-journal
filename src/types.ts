export type RecipeData = {
  id: string | undefined;
  createdAt: number | undefined;
  name: string;
  isExternal: boolean;
  externalLink?: string;
  ingredients?: string[];
  instructions?: string[];
  notes: string[];
};