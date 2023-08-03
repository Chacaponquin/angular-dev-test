import { Category } from '../model';

export interface FindCategoryResponse {
  success: boolean;
  message: string;
  data: Category;
}
