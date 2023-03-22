export type EmptyProps = Record<string, never>;

export interface LocalStorageData {
  search?: string;
}

export interface PropertyData {
  id: number;
  title: string;
  address: string;
  price: number;
  rooms: number;
  availableFrom: number;
  purpose: 'sale' | 'rent';
}

export type IconType = 'search';
