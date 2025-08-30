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

const sortOptions = ['name', 'createdAt'] as const;

export type SortType = typeof sortOptions[number];

export function isSortType(str: string | null): boolean {
  let isTrue = false;
  sortOptions.forEach((option) => {
    if (str === option) isTrue = true;
  })
  return isTrue;
}

export type InvalidInputMessages = {
  name: string;
  externalLink: string;
};
