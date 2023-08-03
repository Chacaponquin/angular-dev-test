import { Category } from '../model';

export interface SearchCategoryResponse {
  pageSize: number;
  pageNo: number;
  total: number;
  items: Category[];
  success: boolean;
  message: string;
}
