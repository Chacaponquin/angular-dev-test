export interface CreateItemDTO {
  code: string;
  name: string;
  description: string;
  defaultPrice: number;
  defaultCost: number;
  categoryId: string;
}
