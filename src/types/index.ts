export type EmptyProps = Record<string, never>;

export interface LocalStorageData {
  search?: string;
}

export interface PropertyData {
  id: number;
  price: number;
  description: string;
  address: string;
  dateAdded: number;
}