export interface BlogModel {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: CategoryModel;
}

export interface CategoryModel {
  id: number;
  title: string;
}

export type RootStackParamList = {
  BlogScreen: { blogId?: number };
};
