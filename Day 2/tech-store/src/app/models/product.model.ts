import { Category } from './caterogy.model';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
  category: Category;
}
