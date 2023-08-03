import { Item } from '../model';

export interface FindItemResponse {
  success: boolean;
  message: string;
  data: Item;
}
