import { Item } from './Item';

export interface Repository {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
}
