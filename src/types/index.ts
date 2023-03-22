export type EmptyProps = Record<string, never>;

export interface LocalStorageData {
  search?: string;
}

export interface PropertyData {
  id: number | string;
  title: string;
  address: string;
  price: number;
  rooms: string;
  availableFrom: number;
  purpose: 'sale' | 'rent';
  image?: string;
}

export type IconType = 'search';
