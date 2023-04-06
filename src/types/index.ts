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
  agree?: boolean;
}

export type IconType = 'search' | 'home' | 'about' | 'add' | 'close';

export interface RouteDetails {
  to: string;
  title: string;
  testId?: string;
  page: () => JSX.Element;
  icon?: IconType;
  invisible?: boolean;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string | null;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface AllCharacters {
  info: {
    count: number;
    pages: number;
  };

  results: Character[];
}
