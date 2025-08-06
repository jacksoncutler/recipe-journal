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

export type RecipeListItem = {
  id: string;
  createdAt: number;
  name: string;
};

export type SortType = 'name' | 'createdAt';

export type InvalidInputMessages = {
  name: string;
  externalLink: string;
};
